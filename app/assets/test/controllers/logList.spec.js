describe('logList controller', function () {
    'use strict';

    var createController,
        $rootScope,
        $httpBackend,
        END_POINT = '/logs',
        MOCK_DATA = [
            {'amount': 30,  'description': 'dinner',  'user': 'troy'},
            {'amount': 20,  'description': 'movie',  'user': 'chelsey'}
        ];

    beforeEach(module('halfsies'));

    beforeEach(inject(function ($injector) {
        var $controller = $injector.get('$controller');

        $rootScope = $injector.get('$rootScope');
        $httpBackend = $injector.get('$httpBackend');

        $httpBackend.when('GET', END_POINT).respond(MOCK_DATA);

        createController = function () {
            return $controller('logList', {'$scope': $rootScope});
        };
    }));

    it('should register the controller', function () {
        var logListController = createController();
        assert.isObject(logListController);
    });

    it('should list some logs', function () {
        $httpBackend.expectGET(END_POINT);
        createController();
        $httpBackend.flush();

        assert.equal($rootScope.logs[0].description, MOCK_DATA[0].description);
        assert.equal($rootScope.logs[1].amount, MOCK_DATA[1].amount);
    });
});
