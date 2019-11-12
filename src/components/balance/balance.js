import React, { useEffect } from 'react';
import classnames from 'classnames';
import { getBalance } from './actions';

export default function BalanceComponent({ users, balanceStore, dispatch }) {
    const { amount } = balanceStore;

    useEffect(() => {
        if (!amount) dispatch(getBalance());
    }, []);

    if (amount === undefined) return null;

    const balanceDisplay = Math.abs(amount);
    const user1Active = amount >= 0;
    const user2Active = amount <= 0;

    return (
      <section className={'balance'}>
        <div className={'page-wrap'}>
          <div
            className={classnames('balance__circle', {
              active: user1Active
            })}
          >
            <div className={'balance__circle-content'}>
              <div className={'icon icon-balance-skull'} />
              <div className={'dollar-icon'}>$</div>
              <div className={'number'}>{ balanceDisplay }</div>
              <div className={'user'}>{ users[0] }</div>
            </div>
            <div className={'balance__circle-highlight'}><div /></div>
          </div>
          <div className={'balance__vs'}>
            <h1>Vs</h1>
          </div>
          <div
            className={classnames('balance__circle', {
              active: user2Active
            })}
          >
            <div className={'balance__circle-content'}>
              <div className={'icon icon-balance-sheep'} />
              <div className={'dollar-icon'}>$</div>
              <div className={'number'}>{ balanceDisplay }</div>
              <div className={'user'}>{ users[1] }</div>
            </div>
            <div className={'balance__circle-highlight'}><div /></div>
          </div>
        </div>
      </section>
    );
}
