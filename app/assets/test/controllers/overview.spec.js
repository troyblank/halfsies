describe('overview controller', function () {
    'use strict';

    var scope,
        createController;

    beforeEach(module('halfsies'));

    beforeEach(inject(function ($injector) {
        var $rootScope = $injector.get('$rootScope'),
            $controller = $injector.get('$controller');

        scope = $rootScope.$new();

        createController = function () {
            return $controller('overview', {$scope: scope});
        };
    }));


    it('should register the controller', function () {
        var overviewController = createController();
        assert.isObject(overviewController);
    });
});
