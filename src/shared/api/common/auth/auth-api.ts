import { API_LONG_TIMEOUT } from '../../core/config/api-timeout';
import { baseApi } from '../../core/instances/base-api';
import { AuthType } from './types/auth-type';
import { LoginBodyType } from './types/login-body-type';
import { RefreshAccessTokenBodyType } from './types/refresh-access-token-body-type';

class AuthApi {
	async login(body: LoginBodyType) {
		const response = await baseApi.post<AuthType>('auth/login', body, {
			timeout: API_LONG_TIMEOUT
		});

		return response.data;
	}

	async refreshAccessToken(body: RefreshAccessTokenBodyType) {
		const response = await baseApi.post<AuthType>(
			'auth/refresh-access-token',
			body
		);

		return response.data;
	}

	async logout() {
		const response = await baseApi.post<void>('auth/logout');

		return response.data;
	}
}

export const authApi = new AuthApi();
