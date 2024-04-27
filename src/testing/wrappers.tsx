import React from "react"
import { QueryClientProvider, QueryClient } from "@tanstack/react-query"

export const TestProviders = ({children}: React.PropsWithChildren) => {
	return (
		<QueryClientProvider client={new QueryClient()}>
			{children}
		</QueryClientProvider>
	)
}
