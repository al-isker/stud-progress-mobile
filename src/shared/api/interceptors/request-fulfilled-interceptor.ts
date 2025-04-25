import AsyncStorage from '@react-native-async-storage/async-storage';
import { InternalAxiosRequestConfig } from 'axios';
import { ACCESS_TOKEN_STORAGE_KEY } from '@/shared/config/storage';

export const requestFulfilledInterceptor = async (
	request: InternalAxiosRequestConfig
) => {
	const accessToken = await AsyncStorage.getItem(ACCESS_TOKEN_STORAGE_KEY);

	if (accessToken) {
		request.headers.Authorization = `Bearer ${accessToken}`;
	}

	return request;
};
