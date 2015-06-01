var assert = require('assert');
var sinon = require('sinon');
require('../helpers/assert.helper.js')(assert);
var pathingHelper = require('../helpers/pathing.helper.js');

var selfTest = (function() {

    return {
        init: function() {
            //init
        },

        callback: function() {
            //callback
        }
    }
})();

describe('self', function() {
    'use strict';

    it('should be able to assert', function() {
        assert.equal(true, true);
        assert.notEqual(false, true);
    });

    it('should be able to spy with sinon', function() {
        var callback = sinon.spy(selfTest, 'callback');

        selfTest.callback();

        assert.equal(callback.called, true);
    });

    it('should be able to use pathing helper', function() {
        var header = pathingHelper.getGetOptions('/', 8001);
        assert.equal(header.method, 'GET');
    });

    it('should be able to use assert helpers', function() {
        assert.contains('The big fox was there.', 'fox');
        assert.notContains('Octopi everywhere!', 'chameleon');
    });
});