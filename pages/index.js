import React from 'react';
import { Head } from '../src/components';
import { AuthRedirect, Header } from '../src/components/connections';

export default function IndexPage() {
    return (
      <AuthRedirect>
        <Head />
        <Header />
      </AuthRedirect>
    );
}
