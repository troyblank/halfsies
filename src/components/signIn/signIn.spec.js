
import React from 'react';
import Chance from 'chance';
import { assert } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import { render, fireEvent } from '@testing-library/react';
import { RouterContext } from 'next/dist/next-server/lib/router-context';
import SignIn from './signIn';

describe('Sign In', () => {
    const chance = new Chance();

    it('should render', () => {
        const user = {};
        const wrapper = shallow(<SignIn signInStore={user} />);

        assert.isTrue(wrapper.find('.sign-in').exists());
        assert.isFalse(wrapper.find('.alert__error').exists());
    });

    it('should show sign in error message if there is one', () => {
        const errorMessage = chance.word();
        const user = { errorMessage };
        const wrapper = shallow(<SignIn signInStore={user} />);

        assert.isTrue(wrapper.find('.alert__error').exists());
        assert.equal(errorMessage, wrapper.find('.alert__error strong').text());
    });

    it('should keep user name in state', () => {
        const user = {};
        const value = chance.word();
        const wrapper = shallow(<SignIn signInStore={user} />);
        const { getByLabelText } = render(<SignIn signInStore={user} />);
        const userNameInputDummy = wrapper.find('#username');
        const userNameInput = getByLabelText('Username:');

        // Simulate for firing the handler, fireEvent for checking state.
        userNameInputDummy.simulate('change', { target: { value } });
        fireEvent.change(userNameInput, { target: { value } });

        assert.equal(userNameInput.value, value);
    });

    it('should keep user name in password', () => {
        const user = {};
        const value = chance.word();
        const wrapper = shallow(<SignIn signInStore={user} />);
        const { getByLabelText } = render(<SignIn signInStore={user} />);
        const passwordInputDummy = wrapper.find('#password');
        const passwordInput = getByLabelText('Password:');

        // Simulate for firing the handler, fireEvent for checking state.
        passwordInputDummy.simulate('change', { target: { value } });
        fireEvent.change(passwordInput, { target: { value } });

        assert.equal(passwordInput.value, value);
    });

    it('should be able to sign in a user', () => {
        const user = {};
        const dispatch = sinon.spy();
        const preventDefault = sinon.spy();
        const wrapper = shallow(<SignIn signInStore={user} dispatch={dispatch} />);
        const form = wrapper.find('form');

        form.simulate('submit', { preventDefault });

        assert.isTrue(dispatch.calledOnce);
        assert.isTrue(preventDefault.calledOnce);
    });

    it('should note be able to sign in a user if a pending form submit is already in progress', () => {
        const user = { pending: true };
        const dispatch = sinon.spy();
        const preventDefault = sinon.spy();
        const wrapper = shallow(<SignIn signInStore={user} dispatch={dispatch} />);
        const form = wrapper.find('form');

        form.simulate('submit', { preventDefault });

        assert.isFalse(dispatch.called);
        assert.isTrue(preventDefault.calledOnce);
    });

    it('should be able to redirect to root of website after successful sign in', () => {
        const signedInUser = { needsRedirect: true };
        const push = sinon.spy();
        const mockRouter = { push };
        render(
          <RouterContext.Provider value={mockRouter}>
            <SignIn signInStore={signedInUser} />
          </RouterContext.Provider>
        );

        assert.isTrue(push.calledOnce);
        assert.isTrue(push.calledWith('/'));
    });
});
