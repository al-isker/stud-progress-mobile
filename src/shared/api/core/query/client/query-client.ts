import { QueryClient } from '@tanstack/react-query';
import {
	MUTATIONS_GC_TIME,
	QUERIES_GC_TIME,
	QUERIES_STALE_TIME
} from '../config/query-time-config';

export const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			retry: 0,
			refetchOnWindowFocus: false,
			staleTime: QUERIES_STALE_TIME,
			gcTime: QUERIES_GC_TIME
		},
		mutations: {
			retry: 0,
			gcTime: MUTATIONS_GC_TIME
		}
	}
});
