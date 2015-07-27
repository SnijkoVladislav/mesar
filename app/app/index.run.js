(function() {
  'use strict';

  angular
    .module('mesar')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {
    $log.debug('runBlock end');
  }

})();
