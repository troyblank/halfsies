import React, { useState, useEffect } from 'react';
// import { useRouter } from 'next/router'; <== This appears to be broken in next.js

export default function AuthRedirect({ authStore, children }) {
    // const router = useRouter(); <== This appears to be broken in next.js
    const { token } = authStore;

    const [display, setDisplay] = useState(false);

    useEffect(() => {
        if (!token) {
            // router.push('/signin'); <== This appears to be broken in next.js
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
}
