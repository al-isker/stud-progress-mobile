import axios from 'axios';
import { API_CONFIG } from '../../config/api-config';
import { API_LONG_TIMEOUT } from '../../config/api-timeout';
import { LoginBodyType } from '../model/types/login-body';
import { LoginResponseType } from '../model/types/login-response';
import { RefreshTokenBodyType } from '../model/types/refresh-token-body';
import { RefreshTokenResponseType } from '../model/types/refresh-token-response';

class AuthApi {
	private internalApi = axios.create(API_CONFIG);

	async login(body: LoginBodyType) {
		return (
			await this.internalApi.post<LoginResponseType>('auth/login', body, {
				timeout: API_LONG_TIMEOUT
			})
		).data;
	}

	async refreshToken(body: RefreshTokenBodyType) {
		return (
			await this.internalApi.post<RefreshTokenResponseType>(
				'auth/refresh-token',
				body
			)
		).data;
	}
}

export const authApi = new AuthApi();
