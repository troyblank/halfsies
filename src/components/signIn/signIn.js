import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { signInUser } from './actions';

export default function SignInComponent({ dispatch, signIn }) {
    const { errorMessage } = signIn;
    const router = useRouter();

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        if (signIn.needsRedirect) router.push('/');
    }, [signIn.needsRedirect]);

    const onSignIn = (e) => {
        dispatch(signInUser({ userName, password }));

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
