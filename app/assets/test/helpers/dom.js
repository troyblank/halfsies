(function (helpers) {
    'use strict';

    helpers.namespace('dom', {
        triggerDomReady: function(ele, className){
            var DOMContentLoaded_event = document.createEvent("Event");
            DOMContentLoaded_event.initEvent("DOMContentLoaded", true, true);
            window.document.dispatchEvent(DOMContentLoaded_event);
        }
    });
}(helpers));