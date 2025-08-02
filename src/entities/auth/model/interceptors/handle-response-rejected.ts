import { router } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { HttpStatusCode } from 'axios';
import { ApiErrorType, api } from '@/shared/api';
import { routes } from '@/shared/config/navigation';
import {
	ACCESS_TOKEN_STORAGE_KEY,
	REFRESH_TOKEN_STORAGE_KEY
} from '@/shared/config/storage';
import { authApi } from '../../api/auth-api';

export const handleResponseRejected = async (error: ApiErrorType) => {
	const originalRequest = error.config;
	const isUnauthorized = error.status === HttpStatusCode.Unauthorized;

	if (originalRequest && isUnauthorized) {
		const refreshToken = await AsyncStorage.getItem(REFRESH_TOKEN_STORAGE_KEY);

		if (refreshToken) {
			try {
				const refreshTokenResponse = await authApi.refreshToken({
					refreshToken
				});

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

		router.replace(routes.loginSemesterForm);
	}

	throw error;
};
