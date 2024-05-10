import { renderHook } from '@testing-library/react'
import { mockUser, TestProviders } from '../../testing'
import { useGetLog } from './getLog'

describe('Get Log', () => {
	it('Should be able to get a log.', () => {
		const { result } = renderHook(() => useGetLog(mockUser()), {  wrapper: TestProviders })
		expect(result.current.isFetching).toStrictEqual(true)
	})
})
