import { AuthType } from '../../../shared/api/auth/model/auth/auth-type';
import { API_LONG_TIMEOUT } from '../../../shared/api/config/api-timeout';
import { baseApi } from '../../../shared/api/instances/base-api';
import { LoginBodyType } from '../model/login/login-body-type';

class AuthApi {
	async login(body: LoginBodyType) {
		const response = await baseApi.post<AuthType>('auth/login', body, {
			timeout: API_LONG_TIMEOUT
		});

		return response.data;
	}

	async logout() {
		const response = await baseApi.post<void>('auth/logout');

		return response.data;
	}
}

export const authApi = new AuthApi();
