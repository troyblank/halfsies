angular.module('halfsies').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('app/views/partials/overview.html',
    "<h2>This is the overview ng partial<h2>"
  );

}]);
