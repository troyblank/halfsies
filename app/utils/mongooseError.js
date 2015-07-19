'use strict';

exports.getErrorMessage = function (err) {
    var errName;

    if (err.errors) {
        for (errName in err.errors) {
            if (err.errors.hasOwnProperty(errName) && err.errors[errName].message) {
                return err.errors[errName].message;
            }
        }
    } else {
        return 'Unknown server error';
    }
};