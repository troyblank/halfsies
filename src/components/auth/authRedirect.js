import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export default function AuthRedirect({ authStore, children }) {
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
      <x>
        { display && <x>{ children }</x> }
      </x>
    );
}
