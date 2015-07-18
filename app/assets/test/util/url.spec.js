describe('url util', function () {
    'use strict';

    it('should serialize url params', function () {
        var params = {
            'foo': 'bar',
            'something': '[]//123',
            'undefined': undefined,
            'null': null
        };
        assert.equal(halfsies.util.url.serializeParams(params), 'foo=bar&something=%5B%5D%2F%2F123');
    });
});
