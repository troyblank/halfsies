import { PROD_API_URL, DEV_API_URL } from '../config/api'

export const getAPIURL = () => {
	if (process.env.NODE_ENV.toLocaleLowerCase() === 'production') {
		return PROD_API_URL
	}

	return DEV_API_URL
}

export default null
