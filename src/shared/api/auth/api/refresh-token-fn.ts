import { IRefreshTokenResponse } from '../model/types/refresh-token-response';
import { authApi } from './auth-api';

export const refreshTokenFn = async () => {
	return authApi
		.post<IRefreshTokenResponse>('auth/refresh-token')
		.then(res => res.data);
};
