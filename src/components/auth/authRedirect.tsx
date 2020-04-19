import React, { useState, useEffect } from 'react';
import { Auth } from './reducer';

type Props = {
  authStore?: Auth
}

export const AuthRedirect: React.FC<Props> = ({ authStore, children }) => {
    const { token } = authStore;

    const [display, setDisplay] = useState(false);


    useEffect(() => {
        if (!token) {
            // ideal router of using Next.js router.push does not work here for unknown reasons
            window.location.assign('signin');
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
