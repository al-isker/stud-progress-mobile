import { API_LONG_TIMEOUT } from '../../config/api-timeout';
import { baseApi } from '../../instances/base-api';
import { AuthType } from '../model/auth/auth-type';
import { LoginBodyType } from '../model/login/login-body-type';
import { RefreshTokenBodyType } from '../model/refresh-token/refresh-token-body-type';

class AuthApi {
	async login(body: LoginBodyType) {
		const response = await baseApi.post<AuthType>('auth/login', body, {
			timeout: API_LONG_TIMEOUT
		});

		return response.data;
	}

	async refreshToken(body: RefreshTokenBodyType) {
		const response = await baseApi.post<AuthType>('auth/refresh-token', body);

		return response.data;
	}

	async logout() {
		const response = await baseApi.post<void>('auth/logout');

		return response.data;
	}
}

export const authApi = new AuthApi();
