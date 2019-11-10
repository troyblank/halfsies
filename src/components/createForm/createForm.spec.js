
import React from 'react';
import { assert } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import CreateForm from './createForm';

describe('Create Form', () => {
    it('should render', () => {
        const wrapper = shallow(<CreateForm createStore={{}} />);

        assert.equal(wrapper.find('h1').text(), 'Create a new Halfsie');
    });

    it('should be able to sign in a user', () => {
        const createStore = { pending: false };
        const dispatch = sinon.spy();
        const preventDefault = sinon.spy();
        const wrapper = shallow(<CreateForm createStore={createStore} dispatch={dispatch} />);
        const form = wrapper.find('form');

        form.simulate('submit', { preventDefault });

        assert.isTrue(dispatch.calledOnce);
        assert.isTrue(preventDefault.calledOnce);
    });

    it('should note be able to create a halfsie if a pending form submit is already in progress', () => {
        const createStore = { pending: true };
        const dispatch = sinon.spy();
        const preventDefault = sinon.spy();
        const wrapper = shallow(<CreateForm createStore={createStore} dispatch={dispatch} />);
        const form = wrapper.find('form');

        form.simulate('submit', { preventDefault });

        assert.isFalse(dispatch.called);
        assert.isTrue(preventDefault.calledOnce);
    });
});
