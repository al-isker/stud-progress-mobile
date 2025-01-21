import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
	reducerPath: 'api',
	tagTypes: ['rating', 'grade', 'profile'],
	baseQuery: fetchBaseQuery(),
	endpoints: () => ({})
});
