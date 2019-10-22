
import React from 'react';
import { RouterContext } from 'next/dist/next-server/lib/router-context';
import { assert } from 'chai';
import sinon from 'sinon';
import { shallow } from 'enzyme';
import { render } from '@testing-library/react';
import AuthRedirect from './authRedirect';

describe('Auth Redirect', () => {
    it('should render', () => {
        const wrapper = shallow(<AuthRedirect />);

        assert.isTrue(wrapper.contains(<x />));
    });

    it('should get a listing on mount', () => {
        const push = sinon.spy();
        const mockRouter = { push };

        render(
          <RouterContext.Provider value={mockRouter}>
            <AuthRedirect />
          </RouterContext.Provider>
        );

        assert.isTrue(push.calledOnce);
        assert.isTrue(push.calledWith('/signin'));
    });
});
