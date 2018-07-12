$(function () {
    "use strict";
        // This javascript controls the dynamic panels
        var $elemStatus = $("#hear-about-us");
        function checkPanelDisplay() {
            var $orgPanel1 = $(".dynamic-panel-1");
            switch ($elemStatus.val()) {
                case "advert":
                    $orgPanel1.slideDown("slow");
                    break;
                default:
                    $orgPanel1.slideUp("slow");
                    break;
            }
            var $orgPanel2 = $(".dynamic-panel-2");
            switch ($elemStatus.val()) {
                case "brochure":
                    $orgPanel2.slideDown("slow");
                    break;
                default:
                    $orgPanel2.slideUp("slow");
                    break;
            }
            var $orgPanel3 = $(".dynamic-panel-3");
            switch ($elemStatus.val()) {
                case "event":
                    $orgPanel3.slideDown("slow");
                    break;
                default:
                    $orgPanel3.slideUp("slow");
                    break;
            }
            var $orgPanel4 = $(".dynamic-panel-4");
            switch ($elemStatus.val()) {
                case "online":
                    $orgPanel4.slideDown("slow");
                    break;
                default:
                    $orgPanel4.slideUp("slow");
                    break;
            }            
            var $orgPanel5 = $(".dynamic-panel-5");
            switch ($elemStatus.val()) {
                case "recommendation":
                    $orgPanel5.slideDown("slow");
                    break;
                default:
                    $orgPanel5.slideUp("slow");
                    break;
            }

            var $orgPanel6 = $(".dynamic-panel-6");
            switch ($elemStatus.val()) {
                case "website":
                    $orgPanel6.slideDown("slow");
                    break;
                default:
                    $orgPanel6.slideUp("slow");
                    break;
            }
        }

        checkPanelDisplay();

        $elemStatus.change(function() {
            checkPanelDisplay();
        });

});
