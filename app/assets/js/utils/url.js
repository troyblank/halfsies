(function (halfsies) {
    'use strict';

    function removeEmptyParams(obj) {
        var prop;

        for (prop in obj) {
            if (obj.hasOwnProperty(prop)) {
                if (obj[prop] === null || obj[prop] === undefined) {
                    delete obj[prop];
                }
            }
        }

        return obj;
    }

    halfsies.namespace('util.url', {
        serializeParams: function (obj) {
            var str = [],
                p;

            obj = removeEmptyParams(obj);
            for (p in obj) {
                if (obj.hasOwnProperty(p)) {
                    str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                }
            }
            return str.join("&");
        }
    });
}(halfsies));