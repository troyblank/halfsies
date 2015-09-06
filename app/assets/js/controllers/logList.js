(function (halfsies) {
    'use strict';

    var $scope,
        $http,
        END_POINT = '/logs';

    halfsies.namespace('controllers.logList', {
        init: function (scope, http) {
            $scope = scope;
            $http = http;

            halfsies.controllers.logList.showList();
        },

        showList: function () {
            $http({
                'method': 'GET',
                'url': END_POINT,
                'headers': {'Content-Type': 'application/x-www-form-urlencoded'}
            }).success(function (data) {
                $scope.currentUser = data.currentUser;
                $scope.logs = data.logs;
            }).error(function (data) {
                $scope.error = data.message;
            });
        }
    });
}(halfsies));

Halfsies.controller('logList', ['$scope', '$http', halfsies.controllers.logList.init]);