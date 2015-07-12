describe('halfsies namespace', function () {
    'use strict';

    afterEach(function () {
        delete halfsies.nsTest;
    });

    it('should create the halfsies namespace', function () {
        assert.isObject(halfsies);
    });

    it('should add empty namespace when no object is provided', function () {
        halfsies.namespace('nsTest');

        assert.isObject(halfsies.nsTest);
    });

    it('should put provided object at the described namespace for single level', function () {
        var provided = {};

        halfsies.namespace('nsTest', provided);

        assert.strictEqual(provided, halfsies.nsTest);
    });

    it('should delimit namespaces with dots', function () {
        halfsies.namespace('nsTest.subNs');

        assert.isObject(halfsies.nsTest.subNs);
    });

    it('should put provided object at the described namespace when multi-level', function () {
        var provided = {};

        halfsies.namespace('nsTest.subNs', provided);

        assert.strictEqual(provided, halfsies.nsTest.subNs);
    });

    it('should not overwrite existing objects', function () {
        var existing = {};
        halfsies.nsTest = {nested: {existing: existing}};

        halfsies.namespace('nsTest.new');

        assert.strictEqual(existing, halfsies.nsTest.nested.existing);
    });
});
