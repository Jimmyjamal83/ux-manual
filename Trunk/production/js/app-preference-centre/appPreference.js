/*! ICAEW app-preference-centre 2015-04-22 */
define(["jquery"],function(a){"use strict";function b(b,c){var d=document.getElementById(b);a(d).attr("checked",!0),a(d).closest("div.drop-down-container").find("div.drop-down-answer").append('<div class="chosen-item" value="'+b+'">'+c+" <span></span></div>"),console.log("addPosition"+b),console.log(Modernizr.touch)}function c(b){var c=document.getElementById(b);a(c).removeAttr("checked");var d=a(c).closest("div.drop-down-container").find('div.drop-down-answer div[value="'+b+'"]');a(d).remove(),console.log("removePosition"+addID),console.log(Modernizr.touch)}a("nav.side-nav ul.drop li input").click(function(){if(a(this).attr("checked")){var d=a(this).attr("id");c(d)}else{var e=a(this).attr("id"),f=a(this).siblings("label").text();b(e,f)}}),a(".drop-down-answer").on("click","div",function(){var b=a(this).attr("value");c(b)}),a("nav.side-nav button").click(function(a){a.preventDefault()}),Modernizr.touch&&console.log("add button touched")});