module.exports = function(assert) {
    'use strict';

    assert.contains = function(parent, child) {
        assert.equal((String(parent).indexOf(child) > -1), true);
    }

    assert.notContains = function(parent, child) {
        assert.equal((String(parent).indexOf(child) > -1), false);
    }
};