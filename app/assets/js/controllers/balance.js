(function (halfsies) {
    'use strict';

    var $scope,
        $http,
        END_POINT = '/balance';

    halfsies.namespace('controllers.balance', {
        init: function (scope, http) {
            $scope = scope;
            $http = http;

            halfsies.controllers.balance.showBalance();
        },

        showBalance: function () {
            $http({
                'method': 'GET',
                'url': END_POINT,
                'headers': {'Content-Type': 'application/x-www-form-urlencoded'}
            }).success(function (data) {
                $scope.balance = halfsies.controllers.balance.getOwedAmounts(data[0]);
            }).error(function (data) {
                $scope.error = data.message;
            });
        },

        getOwedAmounts: function (data) {
            if (data.balancePrimary > 0) {
                data.owedPrimary = 0;
                data.owedSecondary = data.balancePrimary;
            } else {
                data.owedPrimary = Math.abs(data.balancePrimary);
                data.owedSecondary = 0;
            }

            return data;
        }
    });
}(halfsies));

Halfsies.controller('balance', ['$scope', '$http', halfsies.controllers.balance.init]);