import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export default function AuthRedirect({ children }) {
    const router = useRouter();

    const [display] = useState(false);

    useEffect(() => {
        // Placeholder to check to see if user does not exist
        router.push('/signin');
    }, []);

    return (
      <x>
        { display && { children } }
      </x>
    );
}
