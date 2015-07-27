(function() {
	'use strict';

	angular
		.module('mesar')
		.controller('descController', descController);

		/** @ngInject*/

		function descController (dataServices) {
			var vm = this;

			vm.title = dataServices.desc.title;
			vm.text = dataServices.desc.text;
			vm.img = dataServices.desc.img;

		}

})();