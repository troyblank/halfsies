describe('balance controller', function () {
    'use strict';

    var createController,
        $rootScope,
        $httpBackend,
        END_POINT = '/balance',
        MOCK_DATA = [
            {'userPrimary': 'troy',  'userSecondary': 'rachel',  'balancePrimary': 0}
        ];

    beforeEach(module('halfsies'));

    beforeEach(inject(function ($injector) {
        var $controller = $injector.get('$controller');

        $rootScope = $injector.get('$rootScope');
        $httpBackend = $injector.get('$httpBackend');

        $httpBackend.when('GET', END_POINT).respond(MOCK_DATA);

        createController = function () {
            return $controller('balance', {'$scope': $rootScope});
        };
    }));

    it('should register the controller', function () {
        var balanceController = createController();
        assert.isObject(balanceController);
    });

    it('should get the balance', function () {
        $httpBackend.expectGET(END_POINT);
        createController();
        $httpBackend.flush();

        assert.equal($rootScope.balance.userPrimary, MOCK_DATA[0].userPrimary);
        assert.equal($rootScope.balance.userSecondary, MOCK_DATA[0].userSecondary);
        assert.equal($rootScope.balance.balancePrimary, MOCK_DATA[0].balancePrimary);
    });

    it('should calculate and owed balance', function () {
        var owedAmounts = halfsies.controllers.balance.getOwedAmounts(MOCK_DATA[0]),
            owed_data = {'userPrimary': 'troy',  'userSecondary': 'rachel',  'balancePrimary': 333},
            owe_data = {'userPrimary': 'troy',  'userSecondary': 'rachel',  'balancePrimary': -773};

        assert.equal(owedAmounts.owedPrimary, 0);
        assert.equal(owedAmounts.owedSecondary, 0);

        owedAmounts = halfsies.controllers.balance.getOwedAmounts(owed_data);

        assert.equal(owedAmounts.owedPrimary, 0);
        assert.equal(owedAmounts.owedSecondary, 333);

        owedAmounts = halfsies.controllers.balance.getOwedAmounts(owe_data);

        assert.equal(owedAmounts.owedPrimary, 773);
        assert.equal(owedAmounts.owedSecondary, 0);
    });
});
