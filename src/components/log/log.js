import React, { useEffect } from 'react';
import Link from 'next/link';
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
          <x>
            <Link href={'/create'}>
              <a className={'btn'}>Create a halfsie</a>
            </Link>
            <ul className={'log-list'}>
              { log.map((l) => (<LogItem log={l} userName={userName} key={l.date} />))}
            </ul>
          </x>}
      </div>
    );
}
