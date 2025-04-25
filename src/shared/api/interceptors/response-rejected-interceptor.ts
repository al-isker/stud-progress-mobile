import { router } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios, { HttpStatusCode } from 'axios';
import { routes } from '@/shared/config/navigation';
import { ACCESS_TOKEN_STORAGE_KEY } from '@/shared/config/storage';
import { api } from '../api';
import { IApiError } from '../types/api-error';
import { IRefreshTokenResponse } from '../types/refresh-token-response';

export const responseRejectedInterceptor = async (error: IApiError) => {
	const originalRequest = error.config;

	const isLoginRequest = error.config?.url === 'auth/login';
	const isUnauthorized = error.status === HttpStatusCode.Unauthorized;

	if (originalRequest && !isLoginRequest && isUnauthorized) {
		try {
			const { accessToken } = await axios
				.post<IRefreshTokenResponse>('auth/refresh-token', api.defaults)
				.then(res => res.data);

			await AsyncStorage.setItem(ACCESS_TOKEN_STORAGE_KEY, accessToken);

			return await api.request(originalRequest);
		} catch {}

		router.replace(routes.loginSemester);
	}

	throw error;
};
