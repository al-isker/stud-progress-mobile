import { ApiErrorType } from '@/shared/api';

declare module '@tanstack/react-query' {
	interface Register {
		defaultError: ApiErrorType;
	}
}
