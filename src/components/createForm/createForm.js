import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import classnames from 'classnames';
import { createHalfsie, resetCreateForm } from './actions';

export default function CreateFormComponent({ createStore, dispatch }) {
    const { pending, errorMessage } = createStore;
    const router = useRouter();

    const [amount, setAmount] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        if (createStore.needsRedirect) router.push('/');

        dispatch(resetCreateForm());
    }, [createStore.needsRedirect]);

    const onCreate = (e) => {
        if (!pending) dispatch(createHalfsie({ amount, description }));

        e.preventDefault();
    };

    return (
      <section className={'page-wrap'}>
        <h1>Create a new Halfsie</h1>
        <form onSubmit={onCreate}>
          <div>
            <label htmlFor={'amount'}>Amount</label>
            <div>
              <input
                type={'number'}
                id={'amount'}
                required={true}
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
              />
            </div>
          </div>
          <div>
            <label htmlFor={'description'}>Description</label>
            <div>
              <textarea
                id={'description'}
                cols={30}
                rows={10}
                required={true}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
          </div>
          { errorMessage &&
            <div className={'alert alert__error icon-alert-error'}>
              <strong>{ errorMessage }</strong>
            </div>}
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
