(function() {
	'use strict';

	angular
		.module('mesar')
		.controller('footerController', footerController);

		/** @ngInject */

		function footerController (dataServices, anchorSmoothScrollServices) {
			var vm = this;

			vm.copywrite = dataServices.footer.copywrite;
			vm.toTop = dataServices.footer.toTop;
			vm.social = dataServices.footer.social;

			vm.gotoElement = function (eID){
				anchorSmoothScrollServices(eID);
			};

		}

})();