import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQueryWithInterceptor } from './base-query-with-interceptor';

export const api = createApi({
	reducerPath: 'api',
	tagTypes: ['rating', 'grade', 'profile'],
	baseQuery: baseQueryWithInterceptor,
	endpoints: () => ({})
});
