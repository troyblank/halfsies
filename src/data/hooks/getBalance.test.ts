import { renderHook } from '@testing-library/react'
import { mockUser, TestProviders } from '../../testing'
import { useGetBalance } from './getBalance'

describe('Get Balance', () => {
	it('Should be able to get a balance.', () => {
		const { result } = renderHook(() => useGetBalance(mockUser()), {  wrapper: TestProviders })
		expect(result.current.isFetching).toStrictEqual(true)
	})
})
