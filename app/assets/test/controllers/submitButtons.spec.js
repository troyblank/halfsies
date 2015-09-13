describe('submit button controller', function () {
    'use strict';

    beforeEach(function () {
        var html = '<input type="submit" value="Submit" data-pending-value="" />';
        angular.element(document.getElementsByTagName('html')).html(html);

        helpers.dom.triggerDomReady();
    });

    afterEach(function () {
        angular.element(document.getElementsByTagName('html')).html('');
    });

    it('should have pending class after click', function () {
        var targ = $('input');

        targ.trigger('click');

        assert.equal(targ.hasClass('pending'), true);
    });

    it('should be able to detect when it has pending class', function () {
        var targ = $('input');

        targ.trigger('click');

        assert.equal(halfsies.controllers.submitButtons.hasPendingClass(targ), true);
    });

    it('should be able to detect when it does not have pending class', function () {
        var targ = angular.element(document.getElementsByTagName('input'));

        assert.equal(halfsies.controllers.submitButtons.hasPendingClass(targ), false);
    });

    it('should be able to react to an http finish event', function () {
        var targ = $('input');

        targ.trigger('click');
        halfsies.util.eventDispatcher.dispatchEvent(halfsies.util.eventDispatcher.HTTP_FINISH_EVENT);

        assert.equal(targ.hasClass('pending'), false);
    });

    it('should be able to set pending state', function () {
        var targ = angular.element(document.getElementsByTagName('input'));

        halfsies.controllers.submitButtons.setPendingState(targ);

        assert.equal(targ.val(), '');
    });

    it('should be able to remove pending state', function () {
        var targ = $('input');

        targ.trigger('click');
        halfsies.controllers.submitButtons.removePendingState(targ);

        assert.equal(targ.val(), 'Submit');
    });
});
