var Halfsies = angular.module('halfsies', ['ngRoute']);

Halfsies.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    'use strict';

    $routeProvider.when('/', {
        templateUrl: 'app/views/partials/overview.html',
        controller: 'overview'
    }).otherwise({
        redirectTo: '/'
    });

    $locationProvider.hashPrefix('!');
}]);