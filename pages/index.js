import React from 'react';
import { AuthRedirect } from '../src/components';

export default function Index() {
    return (
      <AuthRedirect>
        <div>Hi! you are authenticated!</div>
      </AuthRedirect>
    );
}
