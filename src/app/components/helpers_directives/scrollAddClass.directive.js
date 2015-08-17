(function() {
	'use strict';

	angular
		.module('mesar')
		.directive('scrTargetDirc', scrTargetDirc);


		function scrTargetDirc ($document) {
			return {
				restrict: 'A',
				link: function (scope, elem, attr) {

					$document.bind('scroll', checkCorrectOffset);

					function checkCorrectOffset () {
						var elOffset = elem.prop('offsetTop'),
								pgOffset = window.pageYOffset,
								startAdd = elOffset - window.innerHeight,
								endAdd 	 = elOffset,
								classAdd = attr.scrTargetDircAddclass;

						if (pgOffset > startAdd && pgOffset < endAdd) {
							elem.addClass(classAdd);
						}

					}

				}
			};
		}

})();