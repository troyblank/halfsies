
import React from 'react';
import { assert } from 'chai';
import { shallow } from 'enzyme';
import Chance from 'chance';
import LogItem from './logItem';

describe('Log Item', () => {
    const chance = new Chance();

    it('should render a negative item', () => {
        const userName = chance.word();
        const log = {
            amount: chance.natural(),
            description: chance.word(),
            user: `${userName}${chance.word()}`
        };
        const wrapper = shallow(<LogItem log={log} userName={userName} />);

        assert.isTrue(wrapper.find('li').hasClass('negative'));
    });

    it('should render a positive item', () => {
        const userName = chance.word();
        const log = {
            amount: chance.natural(),
            description: chance.word(),
            user: userName
        };
        const wrapper = shallow(<LogItem log={log} userName={userName} />);

        assert.isFalse(wrapper.find('li').hasClass('negative'));
    });

    it('should render a negative negative making it positive item', () => {
        const userName = chance.word();
        const log = {
            amount: 0 - chance.natural(),
            description: chance.word(),
            user: `${userName}${chance.word()}`
        };
        const wrapper = shallow(<LogItem log={log} userName={userName} />);

        assert.isFalse(wrapper.find('li').hasClass('negative'));
    });

    it('should render a positive negative item making it a negative', () => {
        const userName = chance.word();
        const log = {
            amount: 0 - chance.natural(),
            description: chance.word(),
            user: userName
        };
        const wrapper = shallow(<LogItem log={log} userName={userName} />);

        assert.isTrue(wrapper.find('li').hasClass('negative'));
    });
});
