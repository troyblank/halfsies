import React, { useState } from 'react';
import { signIn } from './actions';

export default function SignIn({ dispatch, user }) {
    const { errorMessage } = user;

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const onSignIn = (e) => {
        dispatch(signIn({ userName, password }));

        e.preventDefault();
    };

    return (
      <div className={'page-wrap sign-in'}>
        <header>
          <div className={'icon-logo'} />
        </header>
        <form method={'post'} onSubmit={onSignIn}>
          <div>
            <label htmlFor={'username'}>Username:</label>
            <input
              id={'username'}
              type={'text'}
              name={'username'}
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor={'password'}>Password:</label>
            <input
              id={'password'}
              type={'password'}
              name={'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          { errorMessage &&
            <div className={'alert alert__error icon-alert-error'}>
              <strong>{ errorMessage }</strong>
            </div>}
          <div>
            <input type={'submit'} value={'Login'} data-pending-value={''} />
          </div>
        </form>
      </div>
    );
}
