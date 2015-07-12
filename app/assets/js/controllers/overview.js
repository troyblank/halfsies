(function (halfsies) {
    'use strict';

    halfsies.namespace('controllers.overview', {
        init: function () {
            return true;
        }
    });
}(halfsies));

Halfsies.controller('overview', ['$scope', halfsies.controllers.overview.init]);