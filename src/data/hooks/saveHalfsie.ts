import { useMutation } from '@tanstack/react-query'
import { type NewLog, type User } from '../../types'
import { saveHalfsie  } from '../'
import { GET_BALANCE_QUERY_KEY } from './getBalance'
import { GET_LOG_QUERY_KEY } from './getLog'
import { queryClient } from '../queryClient'

export const useSaveHalfsie = () => useMutation({
	mutationFn: ({ user, newLog }: { user: User, newLog: NewLog }) =>  saveHalfsie({user, newLog}),
	onSuccess: ({ newBalance, newLogs }) => {
		queryClient.setQueryData([GET_BALANCE_QUERY_KEY], newBalance)
		queryClient.setQueryData([GET_LOG_QUERY_KEY], newLogs)
	},
})
