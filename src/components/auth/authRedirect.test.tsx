
import React from 'react';
import { RouterContext } from 'next/dist/next-server/lib/router-context';
import { assert } from 'chai';
import { shallow } from 'enzyme';
import { render } from '@testing-library/react';
import Chance from 'chance';
import AuthRedirect from './authRedirect';

describe('Auth Redirect', () => {
    const chance = new Chance();

    it('should render', () => {
        const wrapper = shallow(<AuthRedirect authStore={{}} />);

        assert.isTrue(wrapper.contains(<React.Fragment />));
    });

    test('should redirect to signin page if there is no auth', () => {
        const push = jest.fn();
        const mockRouter = { push };

        render(
          // @ts-ignore testing if AuthRedirect interacts with NextRouter
          <RouterContext.Provider value={mockRouter}>
            <AuthRedirect authStore={{}} />
          </RouterContext.Provider>
        );

        expect(push).toHaveBeenCalledTimes(1);
        expect(push).toHaveBeenLastCalledWith('/signin');
    });

    test('should show children if there is auth', () => {
        const className = chance.word();

        const { container } = render(
          <AuthRedirect authStore={{ token: 'someToken' }}>
            <div className={className} />
          </AuthRedirect>
        );

        expect(container.querySelector(`.${className}`)).toBeTruthy();
    });
});
