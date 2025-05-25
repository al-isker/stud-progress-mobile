import { router } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { HttpStatusCode } from 'axios';
import { routes } from '@/shared/config/navigation';
import { ACCESS_TOKEN_STORAGE_KEY } from '@/shared/config/storage';
import { REFRESH_TOKEN_STORAGE_KEY } from '@/shared/config/storage/storage';
import { api } from '../api';
import { refreshTokenFn } from '../auth/api/refresh-token-fn';
import { IApiError } from '../types/api-error';

export const responseRejectedInterceptor = async (error: IApiError) => {
	const originalRequest = error.config;
	const isUnauthorized = error.status === HttpStatusCode.Unauthorized;

	if (originalRequest && isUnauthorized) {
		const refreshToken = await AsyncStorage.getItem(REFRESH_TOKEN_STORAGE_KEY);

		if (refreshToken) {
			try {
				const refreshTokenResponse = await refreshTokenFn({ refreshToken });

				await AsyncStorage.setItem(
					ACCESS_TOKEN_STORAGE_KEY,
					refreshTokenResponse.accessToken
				);
				await AsyncStorage.setItem(
					REFRESH_TOKEN_STORAGE_KEY,
					refreshTokenResponse.refreshToken
				);

				return await api.request(originalRequest);
			} catch {}
		}

		router.replace(routes.loginSemester);
	}

	throw error;
};
