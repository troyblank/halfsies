var Halfsies = angular.module('halfsies', ['ngRoute']);

Halfsies.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    'use strict';

    $routeProvider.when('/', {
        templateUrl: 'app/views/partials/overview.html',
        controller: 'overview'
    }).when('/log/create', {
        templateUrl: 'app/views/partials/logCreate.html',
        controller: 'logCreate'
    }).otherwise({
        redirectTo: '/'
    });

    $locationProvider.hashPrefix('!');
}]);