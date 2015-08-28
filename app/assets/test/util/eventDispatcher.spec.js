describe('eventDispatcher util', function () {
    'use strict';

    var MOCK_EVENT = 'mock event';

    it('should be able to add event listeners', function (done) {
        function eventListener(data) {
            assert.equal(data.passed, true);
            done();
        }

        halfsies.util.eventDispatcher.addEventListener(MOCK_EVENT, eventListener);
        halfsies.util.eventDispatcher.dispatchEvent(MOCK_EVENT, {passed: true});

        halfsies.util.eventDispatcher.removeEventListener(MOCK_EVENT, eventListener);
    });

    it('should be able to remove event listeners', function () {
        var eventListener = {
            callback: function () {
                return true;
            }
        },
            callback = sinon.spy(eventListener, 'callback');

        halfsies.util.eventDispatcher.addEventListener(MOCK_EVENT, eventListener.callback);
        halfsies.util.eventDispatcher.dispatchEvent(MOCK_EVENT, {passed: true});
        halfsies.util.eventDispatcher.removeEventListener(MOCK_EVENT, eventListener.callback);
        halfsies.util.eventDispatcher.dispatchEvent(MOCK_EVENT, {passed: true});

        assert.equal(callback.calledOnce, true);
    });

    it('should be able to dispatch an event', function () {
        var dispatchEvent = sinon.spy(halfsies.util.eventDispatcher, 'dispatchEvent');

        halfsies.util.eventDispatcher.dispatchEvent(MOCK_EVENT);

        assert.equal(dispatchEvent.called, true);
    });
});
