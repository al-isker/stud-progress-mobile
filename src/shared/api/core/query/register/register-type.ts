import { ApiErrorType } from './api-error-type';
import { MutationMetaType } from './mutation-meta-type';
import { QueryMetaType } from './query-meta-type';

declare module '@tanstack/react-query' {
	interface Register {
		defaultError: ApiErrorType;
		queryMeta: QueryMetaType;
		mutationMeta: MutationMetaType;
	}
}
