import axios from 'axios';
import { API_CONFIG, API_LONG_TIMEOUT } from '@/shared/api';
import { LoginBodyType } from '../model/types/login-body';
import { LoginResponseType } from '../model/types/login-response';
import { RefreshTokenBodyType } from '../model/types/refresh-token-body';
import { RefreshTokenResponseType } from '../model/types/refresh-token-response';

class AuthApi {
	private baseApi = axios.create(API_CONFIG);

	async login(body: LoginBodyType) {
		const response = await this.baseApi.post<LoginResponseType>(
			'auth/login',
			body,
			{ timeout: API_LONG_TIMEOUT }
		);

		return response.data;
	}

	async refreshToken(body: RefreshTokenBodyType) {
		const response = await this.baseApi.post<RefreshTokenResponseType>(
			'auth/refresh-token',
			body
		);

		return response.data;
	}
}

export const authApi = new AuthApi();
