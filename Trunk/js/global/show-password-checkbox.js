define("global/show-password-checkbox", ["jquery", "core"], function ($) {
    "use strict";
    $(function () {
        //add a show password checkbox to the demo-field
		new ShowPasswordCheckbox(document.getElementById("password"));
    });
});