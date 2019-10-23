import React from 'react';

export default function SignIn() {
    return (
      <div className={'page-wrap sign-in'}>
        <header>
          <div className={'icon-logo'} />
        </header>
        <form action={'/signin'} method={'post'}>
          <div>
            <label>Username:</label>
            <input type={'text'} name={'username'} />
          </div>
          <div>
            <label>Password:</label>
            <input type={'password'} name={'password'} />
          </div>
          <div className={'alert alert__error icon-alert-error'}>
            <strong>error goes here</strong>
          </div>
          <div>
            <input type={'submit'} value={'Login'} data-pending-value={''} />
          </div>
        </form>
      </div>
    );
}
