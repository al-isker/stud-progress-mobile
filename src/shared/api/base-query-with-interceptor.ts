import AsyncStorage from '@react-native-async-storage/async-storage';
import { BaseQueryApi } from '@reduxjs/toolkit/query/react';
import { Routes } from '@/shared/config/navigation';
import { ACCESS_TOKEN_STORAGE_KEY } from '../constants/storage';
import { baseQuery } from './base-query';

export const baseQueryWithInterceptor = async (
	args: any,
	api: BaseQueryApi,
	extraOptions: {}
) => {
	let response = await baseQuery(args, api, extraOptions);

	if (window.location.pathname !== Routes.SIGN_IN) {
		if (response.error && response.error.status === 401) {
			const refreshResponse = await baseQuery(
				{ url: 'auth/refresh-token', method: 'POST' },
				api,
				{}
			);

			if (refreshResponse.data) {
				await AsyncStorage.setItem(
					ACCESS_TOKEN_STORAGE_KEY,
					(refreshResponse.data as any).accessToken
				);

				response = await baseQuery(args, api, extraOptions);
			} else {
				window.location.href = Routes.SIGN_IN;
			}
		}
	}

	return response;
};
