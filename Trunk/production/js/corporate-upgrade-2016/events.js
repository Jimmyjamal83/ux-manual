/*! ICAEW corporate-upgrade-2016 2016-08-25 */
define("corporate-upgrade-2016/events",["jqueryui","handlebars","corporate-upgrade-2016/tracking","corporate-upgrade-2016/paging"],function(a,b,c){"use strict";return{initialize:function(){a(document).ready(function(){function d(c,d,e){var f=a("#event-results table tbody");e&&(f.empty(),a("#event-results .no-results").toggle(0==c.totalHits),a("#event-results table").toggle(0!=c.totalHits)),a("#event-results .number-of-results").text(c.totalHits),a("#event-results .selected-location").text(a("#event-location option:selected").data("text")),a("#event-results .selected-topic").text(a("#event-topic option:selected").data("text")),a("#event-results .selected-date").text(a("#event-date option:selected").data("text"));var g=a("#event-template").html(),h=b.compile(g),i=h(c);f.append(i)}var e={callback:d,rootPath:"/api/corporate-upgrade-2016/content/getqueryevents",begin:function(){a("#ajax-loader").slideDown(),a("#event-results .results").slideDown(),a("#event-promo").slideUp()},always:function(){a("#ajax-loader").hide()},fail:function(){a("#event-results .error-results").slideDown(),a("#event-results .results").hide()},valuesSelector:"#event-topic, #event-location, #event-date, #keyword, #dept",autoNextPage:!0,autoNextPageSelector:"#event-results table tbody tr:last"};a(".pagination-centered").hide();var f=a(".page").page(e);if(a("#event-date").change(function(){a("#event-calendar").datepicker("hide")}),a("#event-topic, #event-location, #event-date").change(function(){f.search(!0);var b="Text: '"+a("#keyword").val()+"', Subjects: "+a("#event-topic option:selected").data("text")+", Locations: "+a("#event-location option:selected").data("text")+", StartDate: "+a("#event-date option:selected").data("text");c.track("Event search","Filter",b)}),a("#event-search-form").submit(function(b){b.preventDefault(),f.search(!0);var d="Text: '"+a("#keyword").val()+"', Subjects: "+a("#event-topic option:selected").data("text")+", Locations: "+a("#event-location option:selected").data("text")+", StartDate: "+a("#event-date option:selected").data("text");c.track("Event search","Search",d)}),a("#keyword").data("timeout",null).keyup(function(){clearTimeout(jQuery(this).data("timeout")),jQuery(this).data("timeout",setTimeout(function(){a("#event-search-form").trigger("submit")},300))}),a("#event-search-form input:reset").click(function(b){b.preventDefault(),a("#event-search-form").get(0).reset(),f.search(!0),c.track("Event search","Reset form","")}),a(document).delegate("#event-results table a","click",function(){var b=a(this).closest("tr").find("a:not(.booking-link):first").text();a(this).hasClass("booking-link")?c.track("Event search","Book event",b):c.track("Event search","View event",b)}),a("#event-calendar").datepicker({dateFormat:"d MM yy",onSelect:function(b,c){a("#event-date option:selected").removeAttr("selected"),a("#event-date option[data-addedbydatepicker='true']").remove(),a("#event-date").append(a("<option>",{value:c.selectedYear+"-"+("0"+(c.selectedMonth+1)).slice(-2)+"-"+c.selectedDay,text:b,"data-text":b,selected:"selected","data-addedbydatepicker":"true"})).trigger("change")},beforeShow:function(b,c){var d=a("#event-calendar ~ div");setTimeout(function(){c.dpDiv.position({my:"right top",at:"right bottom",of:d})},0)}}),a("#event-calendar ~ div").click(function(){a("#event-calendar").datepicker("show")}),a("#event-results").length){a("#event-results").after('<div id="top-link-slider"><a href="#menu-spacer">Top</a></div>');{var g=32,h=a("#event-results-banner").offset();h.top}a(window).scroll(function(){a("#event-results").is(":visible")&&a("#event-results-banner").toggleClass("sticky-event-banner",a(document).scrollTop()>h.top-g)})}a(window).on("resize orientationchange",function(){if(a.datepicker._datepickerShowing){var b=a.datepicker._curInst,c=a("#event-calendar ~ div");b.dpDiv.position({my:"right top",at:"right bottom",of:c})}})})}}});