import { getAPIURL } from './apiCommunication'
import { PROD_API_URL, DEV_API_URL } from '../config/api'

describe('API Communication', () => {
	const normalEnv = process.env

	afterEach(() => {
		process.env = normalEnv
	})

	it('should be able to get production api url', () => {
		process.env.NODE_ENV = 'production'

		expect(getAPIURL()).toBe(PROD_API_URL)
	})

	it('should be able to get staging api url', () => {
		process.env.NODE_ENV = 'staging'

		expect(getAPIURL()).toBe(DEV_API_URL)
	})

	it('should be able to get development api url', () => {
		process.env.NODE_ENV = 'development'

		expect(getAPIURL()).toBe(DEV_API_URL)
	})
})
