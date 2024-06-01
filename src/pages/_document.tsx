import React from 'react'
import Document, { DocumentContext } from 'next/document'

export default class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const initialProps = await Document.getInitialProps(ctx)

		return {
			...initialProps,
			head: [
				...(initialProps.head as React.ReactElement[]),
				<meta key={'Content-Security-Policy'}
					httpEquiv={'Content-Security-Policy'}
					content="
						script-src 'self' 'unsafe-eval';
						worker-src 'self' blob:;
						connect-src *.troyblank.com cognito-idp.us-east-2.amazonaws.com ws://localhost:3000 'self';
						font-src *.gstatic.com;
					"
				/>,
			],
		}
	}
}
