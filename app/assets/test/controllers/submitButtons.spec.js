describe('submit button controller', function () {
    'use strict';

    before(function () {
        var html = '<input type="submit" value="Submit" />';
        angular.element(document.getElementsByTagName('html')).html(html);

        helpers.dom.triggerDomReady();
    });

    afterEach(function () {
        angular.element(document.getElementsByTagName('input')).removeAttr('class');
    });

    after(function () {
        angular.element(document.getElementsByTagName('html')).html('');
    });

    it('should have pending class after click', function () {
        var targ = angular.element(document.getElementsByTagName('input'));

        targ.triggerHandler('click');

        assert.equal(targ.hasClass('pending'), true);
    });

    it('should be able to detect when it has pending class', function () {
        var targ = angular.element(document.getElementsByTagName('input'));

        targ.triggerHandler('click');

        assert.equal(halfsies.controllers.submitButtons.hasPendingClass(targ), true);
    });

    it('should be able to detect when it does not have pending class', function () {
        var targ = angular.element(document.getElementsByTagName('input'));

        assert.equal(halfsies.controllers.submitButtons.hasPendingClass(targ), false);
    });

    it('should be able to react to an http finish event', function () {
        var targ = angular.element(document.getElementsByTagName('input'));

        targ.triggerHandler('click');
        halfsies.util.eventDispatcher.dispatchEvent(halfsies.util.eventDispatcher.HTTP_FINISH_EVENT);

        assert.equal(targ.hasClass('pending'), false);
    });
});
