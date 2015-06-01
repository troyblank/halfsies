var selfTest = (function() {

    function addListeners() {
        document.getElementById('test-button').onclick = selfTest.clickHand;
    }

    return {
        init: function() {
            addListeners();
        },

        callback: function() {
            //callback
        },

        clickHand: function() {
            this.className = 'has-been-clicked';
        }
    }
})();


describe('Self', function() {
    'use strict';

    beforeEach(function() {
        document.getElementsByTagName('html')[0].innerHTML = '<a id="test-button">Click me</a>';
    });

    afterEach(function() {
        document.getElementsByTagName('html')[0].innerHTML = '';
    });

    it('should be able to use chai assert', function() {
        assert.equal(true, true);
    });

    it('should be able to use sinon spies', function() {
        var callback = sinon.spy(selfTest, 'callback');

        selfTest.callback();

        assert.equal(callback.called, true);
    });

    it('should allow DOM interaction with phantomjs', function() {
        var clickHand = sinon.spy(selfTest, 'clickHand');
        selfTest.init();

        var testButton = document.getElementById('test-button');
        testButton.onclick();

        assert.equal(clickHand.called, true);
        expect(testButton.className).to.equal('has-been-clicked');
    });
});