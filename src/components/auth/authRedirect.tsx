import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Auth } from './reducer';

type Props = {
  authStore?: Auth
}

export const AuthRedirect: React.FC<Props> = ({ authStore, children }) => {
    const router = useRouter();
    const { token } = authStore;

    const [display, setDisplay] = useState(false);

    useEffect(() => {
        if (!token) {
            router.push('/signin');
        } else {
            setDisplay(true);
        }
    }, []);

    return (
      <React.Fragment>
        { display && <React.Fragment>{ children }</React.Fragment> }
      </React.Fragment>
    );
};

export default AuthRedirect;
