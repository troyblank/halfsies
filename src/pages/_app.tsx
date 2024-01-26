import React from 'react'
import { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import Store from '../store'

// These scss imports are in this location because there is a bug
// where loading styles sometimes breaks routes.
// https://github.com/zeit/next-plugins/issues/282
import '../components/head/head.scss'

export const App = ({ Component, pageProps }: AppProps) => (
	<Provider store={Store}>
		<Component {...pageProps} />
	</Provider>
)

export default App
