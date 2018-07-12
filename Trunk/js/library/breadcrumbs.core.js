/*
 * Smart Responsive Breadcrumbs v2.3
 * http://www.millan.rs/product/smart-responsive-breadcrumbs/
 * 
 * Copyright 2008 - 2013 Milan Petrovic (email: milan@gdragon.info)
 *
 * http://www.dev4press.com
 * http://www.millan.rs
 *
 */

/*jslint regexp: true, nomen: true, sloppy: true, eqeq: true, vars: true, white: true, plusplus: true, maxerr: 50, indent: 4 */

var srb_generated_styles = {
    "background": [],
    "style": []
};

function srbGenerateBackground(color, code) {
    if (!code) {
        code = color.substr(1);
    }

    var cls = "srb-back-" + code, hex = color.substr(1), dec = "", parts = [], 
        styles = ".smart-responsive-breadcrumbs.%cls% .srb-crumbs {background-color: #%hex%;}.smart-responsive-breadcrumbs.%cls% .srb-toggle span,.smart-responsive-breadcrumbs.%cls% .srb-toggle a{color: #%hex%;}.smart-responsive-breadcrumbs.%cls% .srb-toggle .srb-toggle-crumbs{border-left: 1px solid #%hex%;}.smart-responsive-breadcrumbs.%cls% .srb-collapser {background: -moz-linear-gradient(left, rgba(%dec%,0) 0%, rgba(%dec%,1) 100%);background: -webkit-gradient(linear, left top, right top, color-stop(0%,rgba(%dec%,0)), color-stop(100%,rgba(%dec%,1)));background: -webkit-linear-gradient(left, rgba(%dec%,0) 0%,rgba(%dec%,1) 100%);background: -o-linear-gradient(left, rgba(%dec%,0) 0%,rgba(%dec%,1) 100%);background: -ms-linear-gradient(left, rgba(%dec%,0) 0%,rgba(%dec%,1) 100%);background: linear-gradient(to right, rgba(%dec%,0) 0%,rgba(%dec%,1) 100%);filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#00%hex%', endColorstr='#%hex%',GradientType=1);}.smart-responsive-breadcrumbs.%cls%.srb-list-triangle a::after{border-left-color: #%hex%;}";

    if (jQuery.inArray(code, srb_generated_styles.background) === -1) {
        if (hex.length === 3) {
            parts.push(parseInt(hex.substr(0, 1), 16));
            parts.push(parseInt(hex.substr(1, 1), 16));
            parts.push(parseInt(hex.substr(2, 1), 16));
        } else if (hex.length === 6) {
            parts.push(parseInt(hex.substr(0, 2), 16));
            parts.push(parseInt(hex.substr(2, 2), 16));
            parts.push(parseInt(hex.substr(4, 2), 16));
        }

        dec = parts.join(",");

        styles = styles.replace(/%hex%/g, hex);
        styles = styles.replace(/%dec%/g, dec);
        styles = styles.replace(/%cls%/g, cls);

        jQuery("<style id='' type='text/css'>" + styles + "</style>").appendTo("head");

        srb_generated_styles.background.push(code);
    }

    return cls;
}

function srbGenerateStyle(color, colorHover, code) {
    if (!colorHover) {
        colorHover = color;
    }

    if (!code) {
        code = color.substr(1);
    }

    var cls = "srb-style-" + code, hexPrimary = color.substr(1), hexHover = colorHover.substr(1), 
        styles = ".smart-responsive-breadcrumbs.%cls% .srb-crumbs li > span,.smart-responsive-breadcrumbs.%cls% .srb-crumbs a{color:#%primary%;}.smart-responsive-breadcrumbs.%cls% .srb-crumbs a:hover{color:#%hover%;}.smart-responsive-breadcrumbs.%cls%.srb-border .srb-crumbs{border:1px solid #%primary%;}.smart-responsive-breadcrumbs.%cls%.srb-border-topbottom .srb-crumbs{border-top: 1px solid #%primary%;border-bottom: 1px solid #%primary%;}.smart-responsive-breadcrumbs.%cls% .srb-toggle {background-color:#%primary%;}.smart-responsive-breadcrumbs.%cls%.srb-list-triangle a::before{border-left-color:#%primary%;}";

    if (jQuery.inArray(code, srb_generated_styles.style) === -1) {
        styles = styles.replace(/%primary%/g, hexPrimary);
        styles = styles.replace(/%hover%/g, hexHover);
        styles = styles.replace(/%cls%/g, cls);

        jQuery("<style id='' type='text/css'>" + styles + "</style>").appendTo("head");

        srb_generated_styles.style.push(code);
    }

    return cls;
}

function srbGetBackgroundColor(el) {
    var color = el.css("background-color");

    if ((color !== "rgba(0, 0, 0, 0)") && (color !== "transparent")) {
        return color;
    }

    if (el.is("html")) {
        return "#FFFFFF";
    } else {
        return srbGetBackgroundColor(el.parent());
    }
}

;(function ($, window, document, undefined) {
    var pluginName = "smartResponsiveBreadcrumbs",
        browser = {test: false, msie: false, version: 0},
        defaults = {
            "crumbsLinkMode": "triangle",
            "stringMenu": "Breadcrumbs",
            "responsiveLimit": 480,
            "transparentActive": true,
            "transparentClassCode": "transparent",
            "autoCollapse": true,
            "autoCollapseFirst": true,
            "expandOnClick": false,
            "animateCollapse": true,
            "animateSpeedOpen": 400,
            "animateSpeedClose": 200,
            "verticalSlider": true,
            "verticalSliderSpeed": 500,
            "verticalSliderEasing": "swing",
            "collapseVisible": 32,
            "collapseGradient": 16,
            "responsiveTopElement": "first",
            "responsiveTopHideOriginal": true,
            "animateEasingOpen": "swing",
            "animateEasingClose": "swing",
            "crumbElement": "&raquo;",
            "extraClasses": ""
        };

    function smartRBPlugin(element, options) {
        this.element = element;
        this.options = $.extend({}, defaults, options);
        this.settings = {
            "is_mobile": false,
            "collapsed": this.options.collapseGradient + this.options.collapseVisible
        };

        if (!jQuery.easing.jswing) {
            this.options.animateEasingOpen = "swing";
            this.options.animateEasingClose = "swing";
            this.options.verticalSliderEasing = "swing";
        }

        this._defaults = defaults;
        this._name = pluginName;

        this.mobile();
        this.init();
    }

    smartRBPlugin.prototype.mobile = function() {
        var devices = "3ds|android|bada|bb10|hpwos|iemobile|kindle fire|opera mini|opera mobi|opera tablet|rim|silk|wiiu|ipad|ipod|iphone";
        var devicesRegEx = new RegExp(devices, "gi");

        this.settings.is_mobile = devicesRegEx.test(navigator.userAgent);
    };

    smartRBPlugin.prototype.refresh = function (e) {
        var $this = this;

        if (document.body.clientWidth <= $this.options.responsiveLimit) {
            $(".srb-toggle", $this.element).css("display", "block");
            $(".srb-crumbs", $this.element).hide();
            $($this.element).addClass("srb-mobile-display");

            var totalWidth = $(".srb-toggle", $this.element).width(),
                crumbWidth = $(".srb-toggle-crumbs", $this.element).outerWidth();

            jQuery(".srb-toggle-extra", $this.element).width(totalWidth - crumbWidth);
        } else {
            $(".srb-toggle", $this.element).css("display", "none");
            $(".srb-crumbs", $this.element).show();
            $($this.element).removeClass("srb-mobile-display");
        }

        if ($this.options.autoCollapse) {
            if (document.body.clientWidth <= $this.options.responsiveLimit) {
                $(".srb-crumbs li.srb-collapsable a", $this.element).each(function(){
                    $(".srb-element", this).width("auto");
                    $(".srb-collapser", this).hide();
                    $(".srb-icon", this).hide();
                });
            } else {
                $(".srb-crumbs li.srb-collapsable a", $this.element).each(function(){
                    $(".srb-element", this).width($this.settings.collapsed);
                    $(".srb-collapser", this).width($this.options.collapseGradient).css("marginLeft", "-" + $this.options.collapseGradient + "px");
                    $(".srb-icon", this).show();
                });
            }
        }
    };

    smartRBPlugin.prototype.expand = function(el, $this) {
        if (document.body.clientWidth > $this.options.responsiveLimit) {
            if ($this.options.animateCollapse) {
                $(".srb-element", el).stop().animate({
                        width: $(".srb-element", el).attr("data-width")
                    }, {
                        duration: $this.options.animateSpeedOpen, 
                        easing: $this.options.animateEasingOpen,
                        complete: function() {
                            $(this).next().hide();
                        }
                    }
                );
            } else {
                $(".srb-element", el).width("auto");
                $(".srb-collapser", el).hide();
            }
        }
    };

    smartRBPlugin.prototype.collapse = function(el, $this) {
        if (document.body.clientWidth > $this.options.responsiveLimit) {
            if ($this.options.animateCollapse) {
                $(".srb-element", el).stop().animate({
                        width: $this.settings.collapsed
                    }, {
                        duration: $this.options.animateSpeedClose, 
                        easing: $this.options.animateEasingClose,
                        complete: function() {
                            $(this).next().show();
                        }
                    }
                );
            } else {
                $(".srb-element", el).width($this.settings.collapsed);
                $(".srb-collapser", el).show();
            }
        }
    };

    smartRBPlugin.prototype.eventSlider = function(e) {
        e.preventDefault();

        $(this)
            .parent()
            .toggleClass("srb-toggle-crumbs-active");

        if (e.data.$this.options.verticalSlider) {
            $(this)
                .parent().parent().parent().parent()
                .find(".srb-crumbs")
                .slideToggle(e.data.$this.options.verticalSliderSpeed, e.data.$this.options.verticalSliderEasing);
        } else {
            $(this)
                .parent().parent().parent().parent()
                .find(".srb-crumbs")
                .toggle();
        }
    };

    smartRBPlugin.prototype.eventExpand = function(e) {
        e.data.$this.expand(this, e.data.$this);
    };

    smartRBPlugin.prototype.eventCollapse = function(e) {
        e.data.$this.collapse(this, e.data.$this);
    };

    smartRBPlugin.prototype.eventClick = function(e) {
        var $this = e.data.$this;

        var index = $(this).attr("data-index");
        $(this).addClass("srb-hover");

        $(".srb-crumbs .srb-collapsable", $this.element).each(function(){
            if (!$(this).hasClass("srb-crumb-" + index)) {
                $(this).removeClass("srb-hover");
                $this.collapse(this, $this);
            }
        });

        $this.expand(this, $this);
    };

    smartRBPlugin.prototype.transparent = function(color, transparentClassCode) {
        if (color !== false) {
            var ok = false, hex = "#", dec = "", i, tmp;

            if (color.substr(0, 1) !== "#" && color.substr(0, 3) !== "rgb") {
                $("<div id='srb-tmp-hack-id'></div>").css("background-color", color).append("body");
                var clr = $("#srb-tmp-hack-id");
                color = clr.context.bgColor;
                $("#srb-tmp-hack-id").remove();
            }

            if (color.substr(0, 1) === "#") {
                ok = true;

                hex = color;
            } else if (color.substr(0, 3) === "rgb") {
                ok = true;

                var numbers = color.substr(color.indexOf("("));
                numbers = numbers.substr(1, numbers.length - 2).split(",");

                for (i = 0; i < 3; i++) {
                    tmp = (+numbers[i]).toString(16);
                    hex+= tmp.length === 1 ? "0" + tmp : tmp;
                }
            }

            if (ok) {
                srbGenerateBackground(hex, transparentClassCode);
            }
        }
    };

    smartRBPlugin.prototype.init = function() {
        var item, firstItem = "";

        if (browser.test === false && navigator.userAgent.match(/MSIE ([0-9]+)\./)){
            browser.test = true;
            browser.msie = true;
            browser.version = RegExp.$1;
        }

        if (browser.msie && browser.version < 9) {
            this.options.crumbsLinkMode = "element";
        }

        if (this.options.extraClasses !== "") {
            $(this.element).addClass(this.options.extraClasses);
        }

        if (this.options.transparentActive && $.inArray(this.options.transparentClassCode, srb_generated_styles.background)) {
            var background = srbGetBackgroundColor($(this.element));

            this.transparent(background, this.options.transparentClassCode);
        }

        if (this.options.crumbsLinkMode === "element") {
            $(this.element).addClass("srb-list-icon");
        } else if (this.options.crumbsLinkMode === "triangle") {
            $(this.element).addClass("srb-list-triangle");
        }

        $("ul", this.element).wrap('<div class="srb-crumbs"/>');

        if (this.options.responsiveTopElement === "first") {
            item = $(".srb-crumbs li:first", this.element).children().eq(0).clone().wrap("<div></div>").parent().html();

            if (this.options.responsiveTopHideOriginal) {
                $(".srb-crumbs li:first", this.element).addClass("srb-toggle-hide");
            }
        } else {
            item = $(".srb-crumbs li:last", this.element).children().eq(0).clone().wrap("<div></div>").parent().html();

            if (this.options.responsiveTopHideOriginal) {
                $(".srb-crumbs li:last", this.element).addClass("srb-toggle-hide");
            }
        }

        firstItem = "<li class='srb-toggle-extra'>" + item + "</li>";

        $(this.element)
            .prepend("<div class='srb-toggle-wrapper'><ul class='srb-toggle'>" + firstItem + "<li class='srb-toggle-crumbs'><a href='#'>" + this.options.stringMenu + "</a></li></ul></div>");

        $(".srb-toggle-crumbs a", this.element)
            .bind("click", {$this: this}, this.eventSlider);

        $(".srb-crumbs li a", this.element)
            .wrapInner("<span class='srb-element'/>");

        if (this.options.autoCollapse) {
            var sel = ".srb-crumbs li:not(:last-child)";

            if (!this.options.autoCollapseFirst) {
                sel+= ":not(:first-child)";
            }

            $(sel, this.element).addClass("srb-collapsable").each(function(idx) {
                $(".srb-element", this)
                    .attr("data-width", $(".srb-element", this).width());

                $(this)
                    .addClass("srb-crumb-" + idx)
                    .attr("data-index", idx);
            });

            $(".srb-crumbs li:not(:last-child) a", this.element)
                .append("<span class='srb-collapser'>&nbsp;</span>");

            if (this.settings.is_mobile || this.options.expandOnClick) {
                $(".srb-crumbs li.srb-collapsable", this.element)
                    .bind("click", {$this: this}, this.eventClick);

                $(".srb-crumbs li.srb-collapsable a", this.element).click(function(e){
                    if (!$(this).parent().hasClass("srb-hover")) {
                        e.preventDefault();
                    }
                });
            } else {
                $(".srb-crumbs li.srb-collapsable", this.element)
                    .bind("mouseover", {$this: this}, this.eventExpand)
                    .bind("mouseout", {$this: this}, this.eventCollapse);
            }
        }

        if (this.options.crumbsLinkMode === "element" && this.options.crumbElement !== "") {
            $(".srb-crumbs li:not(:last-child) a", this.element)
                .append("<span class='srb-icon'>" + this.options.crumbElement + "</span>");
        }
        var $this = this;
        $(window).bind("resize orientationchange", function () { $this.refresh(); });
        $(document).ready(function() {
            $this.refresh();
        });
    };

    $.fn[pluginName] = function(options) {
        return this.each(function() {
            if (!$.data(this, "plugin_" + pluginName)) {
                $.data(this, "plugin_" + pluginName, new smartRBPlugin(this, options));
            }
        });
    };
})(jQuery, window, document);
