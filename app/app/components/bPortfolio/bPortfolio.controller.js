(function() {
	'use strict';

	angular
		.module('mesar')
		.controller('portfolioController', portfolioController);

		/** @ngInject*/

		function portfolioController (dataServices, colomnizServices) {
			var vm = this;

			vm.title = dataServices.portfolio.title;
			vm.articleDisc = {};

			var articles = dataServices.portfolio.articles,
					start = 0,
					end = articles.length,
					colum = 4;
			vm.articles = colomnizServices(articles, colum, start, end);

		}

})();