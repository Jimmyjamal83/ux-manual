"use strict";

requirejs.config({
    baseUrl: cdnPath,
    //except, if the module ID starts with "app",
    //load it from the js/app directory. paths
    //config is relative to the baseUrl, and
    //never includes a ".js" extension since
    //the paths config could be for a directory.
    paths: {

        jquery: '//ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min',
        jqueryui: '//code.jquery.com/ui/1.10.4/jquery-ui.min',
        handlebars: 'js/library/handlebars-v1.3.0',
        core: 'production/js/design-manual/core',
        bootstrapper: 'production/js/design-manual/bootstrapper',     // Change to application specific directory
        // swatchhex: 'production/js/design-manual/swatchhex',

        // IE stuff
        html5shiv: "//cdnjs.cloudflare.com/ajax/libs/html5shiv/3.6.2/html5shiv",
        nwmatcher: "//s3.amazonaws.com/nwapi/nwmatcher/nwmatcher-1.2.5-min",
        respond: "//cdnjs.cloudflare.com/ajax/libs/respond.js/1.1.0/respond.min",
        selectivizr: "//html5base.googlecode.com/svn-history/r38/trunk/js/selectivizr-1.0.3b",
        rem: "js/library/rem.min",


        corporate: "js/corporate",
        global: "js/global",
    },
    "shim": {
        "jqueryui": {
            exports: "$",
            deps: ['jquery']
        },
        "handlebars": {
            exports: "Handlebars"
        },
        "modernizr": {
            exports: "Modernizr"
        },
        'foundation': {
            deps: ['jquery']
        },
        'core': {
            deps: ['jquery']
        },
        'bootstrapper': {
            deps: ['core']
        },
    }
});
