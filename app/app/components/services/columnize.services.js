(function () {
  'use strict';

  angular
    .module('mesar')
    .factory('colomnizServices', colomnizServices);

    /**@ngInject*/

     function colomnizServices () {
      return function (input, cols, start, end) {

          var arr = [];
          for(start ; start < end; start++) {
            var colIdx = start % cols;
            arr[colIdx] = arr[colIdx] || [];
            arr[colIdx].push(input[start]);
          }
          return arr;
    };
}
})();