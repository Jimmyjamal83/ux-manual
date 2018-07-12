

    $(document).ready(function () {
        $('#menu').delegate('#mm-account-button, #mm-search-button, #mm-menu-button', 'click', function (e) {
            var target = $(this);
            var menu = $('#' + target.data('menu'));
            $('#menu .top-bar-section').removeClass('show').addClass('hide');
            $('#menu .medium-menu').addClass('fixed');
            $('#menu .medium-menu .top-bar').removeClass('expanded');
            $('#menu .medium-menu .top-bar').removeClass('fixed');
            if (!menu || menu.length == 0) {
                return;
            }
            if (target.hasClass('off')) {
                $('#menu .toggle-topbar a.on').removeClass('on').addClass('off');
                menu.removeClass('hide').addClass('show');
                target.removeClass('off').addClass('on');
            } else {
                target.removeClass('on').addClass('off');
            }
            e.currentTarget.hash = '';
            e.preventDefault();
        });
    });