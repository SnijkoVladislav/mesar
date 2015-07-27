(function() {
	'use strict';

	angular
		.module('mesar')
		.controller('aboutController', aboutController);

		/** @ngInject*/

		function aboutController (dataServices) {
			var vm = this;

			vm.title = dataServices.about.title.main;

			vm.storyTitle = dataServices.about.title.story;
			vm.text = dataServices.about.text;

			vm.infoTitle = dataServices.about.title.info;
			vm.info = dataServices.about.info;
			vm.button = dataServices.about.button;

			vm.skillsTitle = dataServices.about.title.skills;
			vm.skills = dataServices.about.skills;
		}

})();