import { InternalAxiosRequestConfig } from 'axios';
import { getAccessToken } from '../tokens/get-access-token';

export const createRequestFulfilledHandler = () => {
	return async (request: InternalAxiosRequestConfig) => {
		const accessToken = await getAccessToken();

		if (accessToken) {
			request.headers.Authorization = `Bearer ${accessToken}`;
		}

		return request;
	};
};
