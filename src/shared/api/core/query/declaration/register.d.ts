import { ApiErrorType } from '../../error/api-error-type';
import { QueryMetaType } from '../meta/query-meta';

declare module '@tanstack/react-query' {
	interface Register {
		defaultError: ApiErrorType;
		queryMeta: QueryMetaType;
	}
}
