(function (halfsies) {
    'use strict';

    halfsies.namespace('controllers.logCreate', {
        init: function () {
            return true;
        }
    });
}(halfsies));

Halfsies.controller('logCreate', ['$scope', halfsies.controllers.logCreate.init]);