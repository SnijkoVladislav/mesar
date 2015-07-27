(function() {
	'use strict';

	angular
		.module('mesar')
		.controller('logoController', logoController);

		/** @ngInject*/

		function logoController (dataServices) {
			var vm = this;

			vm.title = dataServices.logo.title;

		}

})();