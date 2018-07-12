    var self = {};
    $.fn.page = function (options) {
        
        var target = this;
        var searching = false;
        var noMoreResults = false;
        // This is the easiest way to have default options.
        var settings = $.extend({
            // These are the defaults.
            numberPerPage: setDefaultFromData(target, 'pagesize', 5),
            index: setDefaultFromData(target, 'index', 0),
            queryId: target.data('queryid'),
            rootPath: setDefaultFromData(target, 'rooturl', '/api/corporate/content/getquerycontent'),
            minMs: 0
        }, options);

        self.pluginOptions = settings;

        if (self.pluginOptions.autoNextPage) {
            //remove element, no longer used
            target.remove();
            //every time the user scroll we have to check it the element defined in the selector is on screen, if yes make a search
            $(window).scroll(function () {
                var selector = $(self.pluginOptions.autoNextPageSelector);
                if (searching == false && selector.length && selector.isOnScreen() && noMoreResults == false) {
                    target.search();
                }
            });
        }

        // when "more results" is clicked, search for more
        $(this).click(function (e) {
            e.preventDefault();
            target.search();
        });


        this.search = function (reset) {
            //prevent multiple searches at the same time.
            if (searching) {
                return;
            }

            //if reset, reset search index and variables.
            if (reset) {
                self.pluginOptions.index = 0;
                noMoreResults = false;
            }

            var url = self.pluginOptions.rootPath;

            //call begin method if defined.
            if (self.pluginOptions.begin) {
                self.pluginOptions.begin(reset);
            }
            //set searching to prevent multiple searches at the same time.
            searching = true;

            var timestamp = new Date().getTime();

            //get json
            $.getJSON(url, {
                query: self.pluginOptions.queryId,
                start: self.pluginOptions.index,
                pageSize: self.pluginOptions.numberPerPage,
                values: getValues(self.pluginOptions.valuesSelector)
            }, function (data) {
                setTimeout(function () {

                    //auto increate index
                    self.pluginOptions.index += self.pluginOptions.numberPerPage;
                    //call callback
                    self.pluginOptions.callback(data, self.pluginOptions.index, reset);
                    //check if there is more results.
                    noMoreResults = self.pluginOptions.index >= data.totalHits;
                    //hide "more results" button if no more results.
                    target.toggle(!noMoreResults);

                }, timestamp - new Date().getTime() + self.pluginOptions.minMs);

            }).fail(function () {
                setTimeout(function () {
                    //call if fail method is defined
                    if (self.pluginOptions.fail) {
                        self.pluginOptions.fail(reset);
                    }
                }, timestamp - new Date().getTime() + self.pluginOptions.minMs);
            }).always(function () {
                setTimeout(function () {
                    //set searching to false to allow a new search
                    searching = false;
                    //call if always method is defined
                    if (self.pluginOptions.always) {
                        self.pluginOptions.always(reset);
                    }
                }, timestamp - new Date().getTime() + self.pluginOptions.minMs);
            });;
        }
        return this;
    };

    function getValues(selector) {
        //run through all elements if any and create new object (dictionary<string, string>) to hold values
        if (selector) {
            var values = {};
            $(selector).each(function () {
                values[$(this).attr('name')] = $(this).val();
            });
            return values;
        } else {
            return null;
        }
    }

    function setDefaultFromData(target, dataAttribute, defaultValue) {
        if (target.data(dataAttribute)) {
            return target.data(dataAttribute);
        }
        return defaultValue;
    }


    // check if element is in the current viewport
    $.fn.isOnScreen = function () {

        var win = $(window);

        var viewport = {
            top: win.scrollTop(),
            left: win.scrollLeft()
        };
        viewport.right = viewport.left + win.width();
        viewport.bottom = viewport.top + win.height();

        var bounds = this.offset();
        bounds.right = bounds.left + this.outerWidth();
        bounds.bottom = bounds.top + this.outerHeight();

        return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));

    };