exports.getGetOptions = function (path, port) {
    'use strict';

    var options = {
        'host': 'localhost',
        'port': port,
        'path': path,
        'method': 'GET',
        'headers': {
            //Use in case API requires an auth session.
            'Cookie': null
        }
    };
    return options;
};