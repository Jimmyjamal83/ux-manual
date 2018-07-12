/*! ICAEW corporate-upgrade-2016 2016-08-25 */
"use strict";requirejs.config({urlArgs:urlArgs,baseUrl:cdnPath,paths:{jquery:"//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min",jqueryui:"//code.jquery.com/ui/1.10.4/jquery-ui.min",jqueryeasing:"//cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min",jqueryvalidate:"js/library/jquery.validate",jqueryvalidateunobtrusive:"js/library/jquery.validate.unobtrusive",handlebars:"js/library/handlebars-v1.3.0",masterslider:"js/library/masterslider",placeholder:"js/library/jquery.placeholder.min",dotimeout:"js/library/jquery.ba-dotimeout.min",core:"production/js/corporate-upgrade-2016/core",search:"production/js/corporate-upgrade-2016/search",events:"production/js/corporate-upgrade-2016/events",bootstrapper:"production/js/corporate-upgrade-2016/bootstrapper",html5shiv:"//cdnjs.cloudflare.com/ajax/libs/html5shiv/3.6.2/html5shiv",nwmatcher:"//s3.amazonaws.com/nwapi/nwmatcher/nwmatcher-1.2.5-min",respond:"//cdnjs.cloudflare.com/ajax/libs/respond.js/1.1.0/respond.min",selectivizr:"//html5base.googlecode.com/svn-history/r38/trunk/js/selectivizr-1.0.3b",rem:"js/library/rem.min",corporate:"js/corporate-upgrade-2016",global:"js/global"},shim:{jqueryui:{exports:"$",deps:["jquery"]},jqueryvalidate:{deps:["jquery"]},jqueryvalidateunobtrusive:{deps:["jqueryvalidate","jquery"]},handlebars:{exports:"Handlebars"},modernizr:{exports:"Modernizr"},foundation:{deps:["jquery"]},core:{deps:["jquery"]},bootstrapper:{deps:["core"]},breadcrumb:{deps:["jquery"]},masterslider:{deps:["jquery"]},placeholder:{deps:["jquery"]},restricted:{deps:["jquery"]}}}),define("global/main",["jquery","core","bootstrapper"],function(a){function b(b){b&&a("[data-"+b+"]").each(function(){c(a(this).data(b))})}function c(a){if(null!=a&&0!=a.length)for(var b=a.split("|"),c=0;c<b.length;c++)require([b[c]])}b("require-inline"),a(function(){b("require")})}),define("corporate-upgrade-2016/main",["jquery","core"],function(a){a(document).ready(function(){function b(){a("#banner-cookie").delay(2e3).slideDown("slow")}function c(a,b,c){if(c){var d=new Date;d.setTime(d.getTime()+24*c*60*60*1e3);var e="; expires="+d.toGMTString()}else var e="";h&&(document.cookie=a+"="+b+e+"; path=/")}function d(a){for(var b=a+"=",c=document.cookie.split(";"),d=0;d<c.length;d++){for(var e=c[d];" "==e.charAt(0);)e=e.substring(1,e.length);if(0==e.indexOf(b))return e.substring(b.length,e.length)}return null}var e=a("#info-block-panel");e.length&&require(["corporate-upgrade-2016/landing"],function(a){a&&new a(e)});var f=a("dl.nested-accordion");f.length&&require(["corporate-upgrade-2016/accordionNested"],function(a){a&&new a});var g=a("dl.accordion");if(g.length&&require(["corporate-upgrade-2016/accordionSimple"],function(a){a&&new a}),a("#banner-cookie .message").length&&a("#banner-cookie").attr("data-cookie-name")&&a("#banner-cookie").attr("data-cookie-duration")){var h=!0,i=a("#banner-cookie").data("cookie-duration"),j=a("#banner-cookie").data("cookie-name"),k="on";d(j)!=k&&b(),a("#banner-cookie span").on("click",function(){a("#banner-cookie").slideUp(),c(j,k,i)})}})}),define("corporate-upgrade-2016/vivocha",["jquery"],function(a){a(document).ready(function(){var a=document.createElement("script");a.type="text/javascript",a.async=!0,a.src="//eptica.vivocha.com/a/icaew/api/vivocha.js";var b=document.getElementById("script-container");b.appendChild(a)})}),define("app-global/global-header",["jquery"],function(a){a(document).ready(function(){a("#global-links").delay(500).slideUp(500),a(".open-global-header").click(function(){a("#global-links").slideToggle(500),a(".open-global-header").delay(500).toggleClass("close")}),a("#sub-menu, #sub-menu .dropdown, #member-links").hide(),a("#menu .has-dropdown").click(function(){a(".dropdown").hide(),a("#sub-menu").show(),a("#menu-list-"+a(this).attr("target")).slideToggle(500),a(this).delay(500).toggleClass("open")}),a(".account-details").click(function(){a("#member-links").slideToggle(500),a(this).toggleClass("close")}),a("#menu #logo").click(function(){a("#main-banner").slideToggle(500)})})});