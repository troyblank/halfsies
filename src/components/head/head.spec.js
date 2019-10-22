
import React from 'react';
import { assert } from 'chai';
import { shallow } from 'enzyme';
import Head from './head';

describe('Head', () => {
    it('should render', () => {
        const wrapper = shallow(<Head />);

        assert.isTrue(wrapper.contains(<title>Halfsies</title>));
    });
});
