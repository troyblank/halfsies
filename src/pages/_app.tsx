import React from 'react'
import { AppProps } from 'next/app'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from '../data'

// These scss imports are in this location because there is a bug
// where loading styles sometimes breaks routes.
// https://github.com/zeit/next-plugins/issues/282
import '../components/head/head.scss'

export const App = ({ Component, pageProps }: AppProps) => (
	<QueryClientProvider client={queryClient}>
		<Component {...pageProps} />
	</QueryClientProvider>
)

export default App
