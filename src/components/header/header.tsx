import React from 'react';

export default function HeadComponent({ authStore }) {
    const { userName } = authStore;

    return (
      <header>
        <div className={'page-wrap'}>
          <div className={'icon-logo'} />
          <div className={'username'}>{ userName }</div>
        </div>
      </header>
    );
}
