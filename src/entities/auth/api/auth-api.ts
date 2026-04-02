import { API_LONG_TIMEOUT, baseApi } from '@/shared/api';
import { LoginBodyType } from '../model/types/login-body';
import { LoginResponseType } from '../model/types/login-response';
import { RefreshTokenBodyType } from '../model/types/refresh-token-body';
import { RefreshTokenResponseType } from '../model/types/refresh-token-response';

class AuthApi {
	async login(body: LoginBodyType) {
		const response = await baseApi.post<LoginResponseType>('auth/login', body, {
			timeout: API_LONG_TIMEOUT
		});

		return response.data;
	}

	async refreshToken(body: RefreshTokenBodyType) {
		const response = await baseApi.post<RefreshTokenResponseType>(
			'auth/refresh-token',
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
