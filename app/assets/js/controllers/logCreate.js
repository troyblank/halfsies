(function (halfsies) {
    'use strict';

    var $scope,
        $http,
        END_POINT = '/logs';

    function addListeners() {
        $scope.create = halfsies.controllers.logCreate.saveLog;
    }

    halfsies.namespace('controllers.logCreate', {
        init: function (scope, http) {
            $scope = scope;
            $http = http;

            addListeners();
        },

        saveLog: function () {
            var log = {
                amount: this.amount,
                description: this.description
            };

            $http({
                'method': 'POST',
                'url': END_POINT,
                'data': halfsies.util.url.serializeParams(log),
                'headers': {'Content-Type': 'application/x-www-form-urlencoded'}
            }).success(function () {
                halfsies.controllers.logCreate.showSuccess();
            }).error(function (data) {
                $scope.error = data.message;
            });
        },

        showSuccess: function () {
            window.location = '/#!/';
        }
    });
}(halfsies));

Halfsies.controller('logCreate', ['$scope', '$http', halfsies.controllers.logCreate.init]);