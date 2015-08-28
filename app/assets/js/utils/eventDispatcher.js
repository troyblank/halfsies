(function (halfsies) {
    'use strict';

    var eventDispatcher = {};

    halfsies.namespace('util.eventDispatcher', {

        HTTP_FINISH_EVENT: 'httpRequestFinished',

        addEventListener: function (type, handler) {
            if (eventDispatcher[type] === undefined) {
                eventDispatcher[type] = [];
            }
            eventDispatcher[type].push(handler);
        },

        removeEventListener: function (type, handler) {
            var i = eventDispatcher[type].length - 1;
            while (i >= 0) {
                if (eventDispatcher[type][i] === handler) {
                    eventDispatcher[type].splice(i, 1);
                    return;
                }
                i -= 1;
            }
        },

        dispatchEvent: function (type, data) {
            if (eventDispatcher[type] !== undefined) {
                var callList = eventDispatcher[type].slice(0),
                    i;

                for (i = 0; i < callList.length; i += 1) {
                    callList[i].apply(this, [data]);
                }
            }
        }
    });
}(halfsies));