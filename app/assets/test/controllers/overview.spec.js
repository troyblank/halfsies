describe('overview controller', function () {
    'use strict';

    var createController,
        $rootScope;

    beforeEach(module('halfsies'));

    beforeEach(inject(function ($injector) {
        var $controller = $injector.get('$controller');

        $rootScope = $injector.get('$rootScope');

        createController = function () {
            return $controller('overview', {'$scope': $rootScope});
        };
    }));


    it('should register the controller', function () {
        var overviewController = createController();
        assert.isObject(overviewController);
    });
});
