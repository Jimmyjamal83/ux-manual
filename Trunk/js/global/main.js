define("global/main",["jquery",
	"core",
	"bootstrapper"], function ($) {
	processRequirements('require-inline');
	$(function () {
		processRequirements('require');
	});

	function processRequirements(selector){
		if(!selector){
			return;
		}
		$('[data-' + selector + ']').each(
			function(){
				loadScripts($(this).data(selector));
			}
		);
	}
	function loadScripts(requiredScripts){
		if(requiredScripts == null || requiredScripts.length == 0){
			return;
		}
		var elems = requiredScripts.split('|');
		for(var i = 0; i < elems.length; i++){
			require([elems[i]]);
		}
	}
});