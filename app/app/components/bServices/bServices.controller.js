(function() {
	'use strict';

	angular
		.module('mesar')
		.controller('servicesController', servicesController);

		/** @ngInject*/

		function servicesController (dataServices) {
			var vm = this;

			vm.title = dataServices.services.title;
			vm.items = dataServices.services.items;

		}

})();