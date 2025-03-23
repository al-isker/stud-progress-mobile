import AsyncStorage from '@react-native-async-storage/async-storage';
import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { SERVER_URL } from '../constants/environments';
import { ACCESS_TOKEN_STORAGE_KEY } from '../constants/storage';
import { QUERY_TIMEOUT } from './const/query-timeout';

const prepareHeaders = async (headers: Headers) => {
	const accessToken = await AsyncStorage.getItem(ACCESS_TOKEN_STORAGE_KEY);

	if (accessToken) {
		headers.set('Authorization', `Bearer ${accessToken}`);
	}

	return headers;
};

export const baseQuery = fetchBaseQuery({
	baseUrl: SERVER_URL,
	timeout: QUERY_TIMEOUT,
	credentials: 'include',
	headers: { 'Content-Type': 'application/json' },
	prepareHeaders
});
