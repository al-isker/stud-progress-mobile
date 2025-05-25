import { IRefreshTokenBody } from '../model/types/refresh-token-body';
import { IRefreshTokenResponse } from '../model/types/refresh-token-response';
import { authApi } from './auth-api';

export const refreshTokenFn = async (body: IRefreshTokenBody) => {
	return (await authApi.post<IRefreshTokenResponse>('auth/refresh-token', body))
		.data;
};
