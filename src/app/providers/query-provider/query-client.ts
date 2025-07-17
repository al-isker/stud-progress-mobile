import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			retry: 0,
			refetchOnWindowFocus: false,
			staleTime: Infinity,
			gcTime: Infinity
		},
		mutations: {
			retry: 0,
			gcTime: 0
		}
	}
});
