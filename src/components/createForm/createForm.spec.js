
import React from 'react';
import { assert } from 'chai';
import { shallow } from 'enzyme';
import Chance from 'chance';
import sinon from 'sinon';
import CreateForm from './createForm';

describe('Create Form', () => {
    const chance = new Chance();

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

    it('should not be able to create a halfsie if a pending form submit is already in progress', () => {
        const createStore = { pending: true };
        const dispatch = sinon.spy();
        const preventDefault = sinon.spy();
        const wrapper = shallow(<CreateForm createStore={createStore} dispatch={dispatch} />);
        const form = wrapper.find('form');

        form.simulate('submit', { preventDefault });

        assert.isFalse(dispatch.called);
        assert.isTrue(preventDefault.calledOnce);
    });

    it('should show an error message if the create form does not work', () => {
        const errorMessage = chance.word();
        const createStore = { pending: true, errorMessage };
        const wrapper = shallow(<CreateForm createStore={createStore} />);

        assert.equal(wrapper.find('.alert__error strong').text(), errorMessage);
    });
});
