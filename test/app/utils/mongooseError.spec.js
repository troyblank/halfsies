
var assert = require('assert'),
    errorMessage = require('../../../app/utils/mongooseError');

describe('mongoose error util', function () {
    'use strict';

    it('should be able to get an error message', function () {
        var err = {
            'errors': {
                'validationError': { 'message': 'User is required.' }
            }
        };

        assert.equal(errorMessage.getErrorMessage(err), 'User is required.');
        assert.equal(errorMessage.getErrorMessage({}), 'Unknown server error');
    });
});