import { useQuery } from '@tanstack/react-query'
import { type User } from '../../types'
import { getBalance } from '../'

export const GET_BALANCE_QUERY_KEY = 'getBalance'

export const useGetBalance = (user: User) => useQuery({
	queryKey: [GET_BALANCE_QUERY_KEY],
	queryFn: () => getBalance(user),
})
