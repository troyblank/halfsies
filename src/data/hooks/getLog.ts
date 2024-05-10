import { useQuery } from '@tanstack/react-query'
import { type User } from '../../types'
import { getLog } from '..'

export const GET_LOG_QUERY_KEY = 'getLog'

export const useGetLog = (user: User) => useQuery({
	queryKey: [GET_LOG_QUERY_KEY],
	queryFn: () => getLog(user),
})
