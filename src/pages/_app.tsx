import React from 'react'
import { Amplify } from 'aws-amplify'
import { Provider } from 'react-redux'
import Store from '../store'

// These scss imports are in this location because there is a bug
// where loading styles sometimes breaks routes.
// https://github.com/zeit/next-plugins/issues/282
import '../components/head/head.scss'

Amplify.configure({
	Auth: {
		region: 'us-west-2',
		userPoolId: 'us-west-2_eEQSBTOTA',
		userPoolWebClientId: 'tlm54p6avpb3uph23irei9388',
		authenticationFlowType: 'USER_SRP_AUTH',
	},
	ssr: true,
})

export const App = ({ Component, pageProps }) => (
	<Provider store={Store}>
		<Component {...pageProps} />
	</Provider>
)

export default App
