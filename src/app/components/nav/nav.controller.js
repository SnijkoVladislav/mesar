(function() {
	'use strict';

	angular
		.module('mesar')
		.controller('navController', navController);

		/** @ngInject */

		function navController (dataServices, anchorSmoothScrollServices) {
			var vm = this;

			vm.visible = false;
			vm.menu = dataServices.nav.menu;

			vm.gotoElement = function (eID){
				anchorSmoothScrollServices(eID);
			};

		}

})();