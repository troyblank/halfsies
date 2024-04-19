
import Chance from 'chance'
import { PROD_API_URL, DEV_API_URL } from '../config/api'
import {
	getAPIURL,
	getHeaders,
	getAndValidateResponseData,
	ERROR_DELIMITER,
	GENERAL_ERROR_HEADING,
	INTERNAL_SERVICE_ERROR_HEADING,
} from './apiCommunication'

describe('API Communication Util', () => {
	const chance = new Chance()
	const normalEnv = process.env

	afterEach(() => {
		process.env = normalEnv
	})

	it('should be able to get production api url', () => {
		// @ts-expect-error
		process.env.NODE_ENV = 'production'

		expect(getAPIURL()).toBe(PROD_API_URL)
	})

	it('should be able to get staging api url', () => {
		// @ts-expect-error
		process.env.NODE_ENV = 'staging'

		expect(getAPIURL()).toBe(DEV_API_URL)
	})

	it('should be able to get development api url', () => {
		// @ts-expect-error
		process.env.NODE_ENV = 'development'

		expect(getAPIURL()).toBe(DEV_API_URL)
	})

	it('should be able to get api headers', () => {
		const jwt: string = chance.string()

		expect(getHeaders(jwt)).toEqual({
			'Content-Type': 'application/json',
			'authorization': `Bearer ${jwt}`,
		})
	})

	it('should be able to validate a good response by not throwing an error', async() => {
		const value: string = chance.word()
		const response = {
			ok: true,
			statusText: 'Such a good call.',
			headers: { get: (name: string) => (name === 'content-type' ? 'application/json' : '') },
			json: async() => await Promise.resolve(value),
		}

		expect(await getAndValidateResponseData(response as Response)).toEqual({ data: value, response })
	})

	it('should not get any data if the response is not JSON', async() => {
		const value: string = chance.word()
		const response = {
			ok: true,
			statusText: 'Such a good call.',
			headers: { get: (name: string) => (name === 'content-type' ? 'text/html' : '') },
			json: async() => await Promise.resolve(value),
		}

		expect(await getAndValidateResponseData(response as Response)).toEqual({ data: {}, response })
	})

	it('should throw an error for a 500 error', async() => {
		const errorMessage: string = chance.word()
		const url: string = chance.url()
		const response = {
			ok: false,
			statusText: 'Such a bad call.',
			status: 500,
			url,
			headers: { get: (name: string) => (name === 'content-type' ? 'application/json' : '') },
			json: async() => await Promise.resolve({ message: errorMessage }),
		}

		await expect(getAndValidateResponseData(response as Response)).rejects.toThrow(`${INTERNAL_SERVICE_ERROR_HEADING}${ERROR_DELIMITER}${errorMessage} (${url})`)
	})

	it('should throw an error for a bad response', async() => {
		const response = {
			ok: false,
			statusText: 'Such a bad call.',
			status: 403,
			headers: { get: (name: string) => (name === 'content-type' ? 'application/json' : '') },
			json: async() => await Promise.resolve(),
		}

		await expect(getAndValidateResponseData(response as Response)).rejects.toThrow(GENERAL_ERROR_HEADING)
	})

	it('should throw an error with a custom error message for a bad response', async() => {
		const customErrorMessage: string = chance.word()

		const response = {
			ok: false,
			statusText: 'Such a bad call.',
			status: 403,
			headers: { get: (name: string) => (name === 'content-type' ? 'application/json' : '') },
			json: async() => await Promise.resolve(),
		}

		await expect(getAndValidateResponseData(response as Response, customErrorMessage)).rejects.toThrow(customErrorMessage)
	})
})
