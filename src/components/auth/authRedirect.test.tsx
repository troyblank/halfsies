
import React from 'react';
import { shallow } from 'enzyme';
import { render } from '@testing-library/react';
import Chance from 'chance';
import AuthRedirect from './authRedirect';

describe('Auth Redirect', () => {
    const chance = new Chance();

    test('should render', () => {
        const wrapper = shallow(<AuthRedirect authStore={{}} />);

        expect(wrapper.contains(<React.Fragment />)).toBe(true);
    });

    test('should redirect to signin page if there is no auth', () => {
        render(
          <AuthRedirect authStore={{}} />
        );

        expect(window.location.assign).toBeCalledWith('signin');
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
