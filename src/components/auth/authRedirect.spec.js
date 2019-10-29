
import React from 'react';
import { RouterContext } from 'next/dist/next-server/lib/router-context';
import { assert } from 'chai';
import sinon from 'sinon';
import { shallow } from 'enzyme';
import { render } from '@testing-library/react';
import Chance from 'chance';
import AuthRedirect from './authRedirect';

describe('Auth Redirect', () => {
    const chance = new Chance();

    it('should render', () => {
        const wrapper = shallow(<AuthRedirect authStore={{}} />);

        assert.isTrue(wrapper.contains(<x />));
    });

    it('should redirect to signin page if there is no auth', () => {
        const push = sinon.spy();
        const mockRouter = { push };

        render(
          <RouterContext.Provider value={mockRouter}>
            <AuthRedirect authStore={{}} />
          </RouterContext.Provider>
        );

        assert.isTrue(push.calledOnce);
        assert.isTrue(push.calledWith('/signin'));
    });

    it('should show children if there is auth', () => {
        const className = chance.word();

        const { container } = render(
          <AuthRedirect authStore={{ token: true }}>
            <div className={className} />
          </AuthRedirect>
        );

        assert.exists(container.querySelector(`.${className}`));
    });
});
