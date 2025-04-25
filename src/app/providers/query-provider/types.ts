import { IApiError } from '@/shared/api';

declare module '@tanstack/react-query' {
	interface Register {
		defaultError: IApiError;
	}
}
