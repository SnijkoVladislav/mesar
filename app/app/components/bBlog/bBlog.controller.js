(function() {
	'use strict';

	angular
		.module('mesar')
		.controller('blogController', blogController);

		/** @ngInject*/

		function blogController (dataServices, colomnizServices) {
			var vm = this;

			vm.title = dataServices.blog.title;

			var articles = dataServices.blog.posts,
					start = 0,
					end = articles.length,
					colum = 3;
			vm.posts = colomnizServices(articles, colum, start, end);

		}

})();