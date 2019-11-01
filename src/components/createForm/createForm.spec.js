
import React from 'react';
import { assert } from 'chai';
import { shallow } from 'enzyme';
import Chance from 'chance';
import sinon from 'sinon';
import { render, fireEvent } from '@testing-library/react';
import { RouterContext } from 'next/dist/next-server/lib/router-context';
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

    it('should keep amount in state', () => {
        const value = chance.natural();
        const wrapper = shallow(<CreateForm createStore={{}} />);
        const { getByLabelText } = render(<CreateForm createStore={{}} />);
        const amountInputDummy = wrapper.find('#amount');
        const amountInput = getByLabelText('Amount');

        // Simulate for firing the handler, fireEvent for checking state.
        amountInputDummy.simulate('change', { target: { value } });
        fireEvent.change(amountInput, { target: { value } });

        assert.equal(amountInput.value, value);
    });

    it('should keep description in state', () => {
        const value = chance.word();
        const wrapper = shallow(<CreateForm createStore={{}} />);
        const { getByLabelText } = render(<CreateForm createStore={{}} />);
        const descriptionTextAreaDummy = wrapper.find('#description');
        const descriptionTextArea = getByLabelText('Description');

        // Simulate for firing the handler, fireEvent for checking state.
        descriptionTextAreaDummy.simulate('change', { target: { value } });
        fireEvent.change(descriptionTextArea, { target: { value } });

        assert.equal(descriptionTextArea.value, value);
    });

    it('should be able to redirect to root of website after successful creation', () => {
        const createStore = { needsRedirect: true };
        const push = sinon.spy();
        const mockRouter = { push };
        render(
          <RouterContext.Provider value={mockRouter}>
            <CreateForm createStore={createStore} />
          </RouterContext.Provider>
        );

        assert.isTrue(push.calledOnce);
        assert.isTrue(push.calledWith('/'));
    });
});
