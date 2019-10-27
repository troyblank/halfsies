
import React from 'react';
import { assert } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import Chance from 'chance';
import { render } from '@testing-library/react';
import Balance from './balance';

describe('Balance', () => {
    const chance = new Chance();
    const users = [chance.word(), chance.word()];

    it('should not render if there is no balance', () => {
        const balance = { };
        const wrapper = shallow(<Balance users={users} balance={balance} />);

        assert.equal(wrapper.type(), null);
    });

    it('should render with a zero balance', () => {
        const balance = { amount: 0 };
        const wrapper = shallow(<Balance users={users} balance={balance} />);

        assert.isTrue(wrapper.find('.balance').exists());
        assert.equal(wrapper.find('.balance__circle.active').length, 2);
    });

    it('should render user 1 active if the balance is positive', () => {
        const balance = { amount: 10 };
        const wrapper = shallow(<Balance users={users} balance={balance} />);

        assert.isTrue(wrapper.find('.balance__circle').at(0).hasClass('balance__circle active'));
    });

    it('should render user 2 active if the balance is negative', () => {
        const balance = { amount: -10 };
        const wrapper = shallow(<Balance users={users} balance={balance} />);

        assert.isTrue(wrapper.find('.balance__circle').at(1).hasClass('active'));
    });

    it('should be able to fetch balance on mount', () => {
        const balance = {};
        const dispatch = sinon.spy();

        render(
          <Balance users={users} balance={balance} dispatch={dispatch} />
        );

        assert.isTrue(dispatch.calledOnce);
    });
});
