import React, { useState, useEffect } from 'react';
import { Auth } from './reducer';

type Props = {
  authStore?: Auth
}

export const AuthRedirect: React.FC<Props> = ({ authStore, children }) => {
    const { refreshToken } = authStore;

    const [display, setDisplay] = useState(false);


    useEffect(() => {
        if (!refreshToken) {
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
