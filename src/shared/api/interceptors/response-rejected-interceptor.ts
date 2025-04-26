import { router } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { HttpStatusCode } from 'axios';
import { routes } from '@/shared/config/navigation';
import { ACCESS_TOKEN_STORAGE_KEY } from '@/shared/config/storage';
import { api } from '../api';
import { refreshTokenFn } from '../auth/api/refresh-token-fn';
import { IApiError } from '../types/api-error';

export const responseRejectedInterceptor = async (error: IApiError) => {
	const originalRequest = error.config;
	const isUnauthorized = error.status === HttpStatusCode.Unauthorized;

	if (originalRequest && isUnauthorized) {
		try {
			const { accessToken } = await refreshTokenFn();

			await AsyncStorage.setItem(ACCESS_TOKEN_STORAGE_KEY, accessToken);

			return await api.request(originalRequest);
		} catch {}

		router.replace(routes.loginSemester);
	}

	throw error;
};
