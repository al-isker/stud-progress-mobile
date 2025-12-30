import { ApiErrorType } from './api-error';
import { MutationMeta, QueryMeta } from './meta';

declare module '@tanstack/react-query' {
	interface Register {
		defaultError: ApiErrorType;
		queryMeta: QueryMeta;
		mutationMeta: MutationMeta;
	}
}
