import { type GetServerSidePropsContext } from 'next'
import { Amplify, ResourcesConfig } from 'aws-amplify'
import { AmplifyServer } from 'aws-amplify/adapter-core'
import { createServerRunner } from '@aws-amplify/adapter-nextjs'
import { amplifyConfig } from '../../config/aws/amplify'
import { type User } from '../types'
import { extractUserInformationFromAmplifyServerContext } from './'

Amplify.configure(amplifyConfig as ResourcesConfig, { ssr: true })

export const { runWithAmplifyServerContext } = createServerRunner({
	// Type assertion needed due to AWS Amplify nested dependency type mismatch in CI
	// The config is functionally correct, but TypeScript sees incompatible ResourcesConfig types
	// from aws-amplify/node_modules/@aws-amplify/core vs root @aws-amplify/core
	config: amplifyConfig as Parameters<typeof createServerRunner>[0]['config'],
})

export const getUserFromAmplify = async(serverSideContext: GetServerSidePropsContext): Promise<User | null> => {
	const { req: request, res: response } = serverSideContext
	let user: User | null = null

	await runWithAmplifyServerContext({
		nextServerContext: { request, response },
		operation: /* istanbul ignore next */ async (amplifyContextSpecification: AmplifyServer.ContextSpec) => {
			user = await extractUserInformationFromAmplifyServerContext(amplifyContextSpecification)
		},
	})

	return user
}
