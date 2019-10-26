
import React from 'react';
import { assert } from 'chai';
import { shallow } from 'enzyme';
import Chance from 'chance';
import Header from './header';

describe('Header', () => {
    const chance = new Chance();

    it('should render', () => {
        const userName = chance.word();
        const auth = { userName };
        const wrapper = shallow(<Header auth={auth} />);

        assert.isTrue(wrapper.contains(<div className={'username'}>{ userName }</div>));
    });
});
