import { router } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { BaseQueryApi } from '@reduxjs/toolkit/query/react';
import { routes } from '@/shared/config/navigation';
import { ACCESS_TOKEN_STORAGE_KEY } from '../config/storage';
import { baseQuery } from './base-query';
import { IExtraOptions } from './types/extra-options';
import { IRefreshTokenResponse } from './types/refresh-token-response';

export const baseQueryWithInterceptor = async (
	args: any,
	api: BaseQueryApi,
	extraOptions: IExtraOptions = {}
) => {
	let response = await baseQuery(args, api, extraOptions);

	const { loginQuery } = extraOptions;

	if (!loginQuery) {
		if (response.error?.status === 401) {
			const refreshTokenResponse = await baseQuery(
				{ url: 'auth/refresh-token', method: 'POST' },
				api,
				{}
			);

			if (refreshTokenResponse.data) {
				await AsyncStorage.setItem(
					ACCESS_TOKEN_STORAGE_KEY,
					(refreshTokenResponse.data as IRefreshTokenResponse).accessToken
				);

				response = await baseQuery(args, api, extraOptions);
			} else {
				router.replace(routes.loginSemester);
			}
		}
	}

	return response;
};
