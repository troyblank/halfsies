import React from 'react';

export default function HeadComponent({ auth }) {
    const { userName } = auth;

    return (
      <header>
        <div className={'page-wrap'}>
          <div className={'icon-logo'} />
          <div className={'username'}>{ userName }</div>
        </div>
      </header>
    );
}
