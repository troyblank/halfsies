import React from 'react';
import { AuthRedirect } from '../src/components';

export default function IndexPage() {
    return (
      <AuthRedirect>
        <div>Hi! you are authenticated!</div>
      </AuthRedirect>
    );
}
