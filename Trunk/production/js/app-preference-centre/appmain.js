/*! ICAEW app-preference-centre 2018-03-16 */
"use strict";requirejs.config({baseUrl:cdnPath,paths:{jquery:"//ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min",jqueryui:"//code.jquery.com/ui/1.10.4/jquery-ui.min",handlebars:"js/library/handlebars-v1.3.0",core:"production/js/app-preference-centre/core",bootstrapper:"production/js/app-preference-centre/bootstrapper",html5shiv:"//cdnjs.cloudflare.com/ajax/libs/html5shiv/3.6.2/html5shiv",nwmatcher:"//s3.amazonaws.com/nwapi/nwmatcher/nwmatcher-1.2.5-min",respond:"//cdnjs.cloudflare.com/ajax/libs/respond.js/1.1.0/respond.min",selectivizr:"//html5base.googlecode.com/svn-history/r38/trunk/js/selectivizr-1.0.3b",rem:"js/library/rem.min",corporate:"js/corporate",global:"js/global"},shim:{jqueryui:{exports:"$",deps:["jquery"]},handlebars:{exports:"Handlebars"},modernizr:{exports:"Modernizr"},foundation:{deps:["jquery"]},core:{deps:["jquery"]},bootstrapper:{deps:["core"]}}}),define("global/main",["jquery","core","bootstrapper"],function(a){function b(b){b&&a("[data-"+b+"]").each(function(){c(a(this).data(b))})}function c(a){if(null!=a&&0!=a.length)for(var b=a.split("|"),c=0;c<b.length;c++)require([b[c]])}b("require-inline"),a(function(){b("require")})});