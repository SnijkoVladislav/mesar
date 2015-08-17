(function() {
	'use strict';

	angular
		.module('mesar')
		.controller('portfolioController', portfolioController);

		/** @ngInject*/

		function portfolioController (dataServices, colomnizServices, safeApply, $scope, $rootScope) {
			var vm = this;

			vm.title = dataServices.portfolio.title;
			vm.articleDisc = {};

			vm.active = function(argument) {

						function ads (argument) {
							console.log(argument);
							console.log(vm.articleDisc[argument]);
						}

					if(vm.articleDisc[argument] === false){
						vm.articleDisc[argument] = true;
						document.body.style.overflowY = "hidden";
						afeApply($scope);
					};
					vm.articleDisc[argument] = false;
					document.body.style.overflowY = "visible";
					afeApply($scope);

			};

			var articles = dataServices.portfolio.articles,
					start = 0,
					end = articles.length,
					colum = 4;
			vm.articles = colomnizServices(articles, colum, start, end);

		}

})();