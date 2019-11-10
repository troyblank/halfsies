import React from 'react';
import Link from 'next/link';
import classnames from 'classnames';
import { createHalfsie } from './actions';

export default function CreateFormComponent({ createStore, dispatch }) {
    const { pending } = createStore;

    const onCreate = (e) => {
        if (!pending) dispatch(createHalfsie());

        e.preventDefault();
    };

    return (
      <section className={'page-wrap'}>
        <h1>Create a new Halfsie</h1>
        <form onSubmit={onCreate}>
          <div>
            <label htmlFor={'amount'}>Amount</label>
            <div>
              <input type={'number'} id={'amount'} required={true} />
            </div>
          </div>
          <div>
            <label htmlFor={'description'}>Description</label>
            <div>
              <textarea id={'description'} cols={30} rows={10} required={true} />
            </div>
          </div>
          <div className={'alert alert__error icon-alert-error'}>
            <strong>error goes here</strong>
          </div>
          <div>
            <input type={'submit'} value={'Submit'} className={classnames({ pending })} />
            <Link href={'/'}>
              <a className={'btn btn--alt'}>Cancel</a>
            </Link>
          </div>
        </form>
      </section>
    );
}
