import React, { useEffect } from 'react';
import LogItem from './logItem';
import { getLog } from './actions';

export default function LogComponent({ logStore, authStore, dispatch }) {
    const { log } = logStore;
    const { userName } = authStore;

    useEffect(() => {
        dispatch(getLog());
    }, []);

    return (
      <div className={'page-wrap'}>
        { log &&
          <ul className={'log-list'}>
            { log.map((l) => (<LogItem log={l} userName={userName} key={l.date} />))}
          </ul>}
        { !log &&
          <span>No purchase log yet.</span>}
      </div>
    );
}
