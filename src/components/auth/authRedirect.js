import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export default function AuthRedirect({ auth, children }) {
    const router = useRouter();

    const [display, setDisplay] = useState(false);

    useEffect(() => {
        if (!auth.token) {
            router.push('/signin');
        } else {
            setDisplay(true);
        }
    }, []);

    return (
      <x>
        { display && <x>{ children }</x> }
      </x>
    );
}
