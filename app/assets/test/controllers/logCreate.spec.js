describe('logCreate controller', function () {
    'use strict';

    var createController,
        $rootScope,
        $httpBackend,
        END_POINT = '/logs';

    beforeEach(module('halfsies'));

    beforeEach(inject(function ($injector) {
        var $controller = $injector.get('$controller');

        $rootScope = $injector.get('$rootScope');
        $httpBackend = $injector.get('$httpBackend');

        createController = function () {
            return $controller('logCreate', {'$scope': $rootScope});
        };
    }));

    afterEach(function () {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    it('should register the controller', function () {
        var logCreateController = createController();
        assert.isObject(logCreateController);
    });

    it('should save a log', function () {
        var showSuccess = sinon.spy(halfsies.controllers.logCreate, 'showSuccess');

        $httpBackend.expect('POST', END_POINT).respond();
        createController();
        $rootScope.create();
        $httpBackend.flush();

        assert.equal(showSuccess.called, true);
        assert.equal($rootScope.error, undefined);
    });
});
