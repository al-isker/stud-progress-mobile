import { HttpStatusCode } from 'axios';
import { authApi } from '@/shared/api/common/auth/auth-api';
import { api } from '../../instances/api';
import { ApiErrorType } from '../../query/register/api-error-type';
import { getRefreshToken } from '../tokens/get-refresh-token';
import { setAuthTokens } from '../tokens/set-auth-tokens';

type createResponseRejectedHandlerOptionsType = {
	onUnauthorized?: () => void;
};

export const createResponseRejectedHandler = (
	options: createResponseRejectedHandlerOptionsType
) => {
	const { onUnauthorized } = options;

	return async (error: ApiErrorType) => {
		const originalRequest = error.config;
		const isUnauthorized = error.status === HttpStatusCode.Unauthorized;

		if (originalRequest && isUnauthorized) {
			const refreshToken = await getRefreshToken();

			if (refreshToken) {
				try {
					const auth = await authApi.refreshAccessToken({
						refreshToken
					});

					await setAuthTokens(auth);

					return await api.request(originalRequest);
				} catch {}
			}

			onUnauthorized?.();
		}

		throw error;
	};
};
