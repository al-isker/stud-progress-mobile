import { baseApi } from '../../instances/base-api';
import { AuthType } from '../model/auth/auth-type';
import { RefreshAccessTokenBodyType } from '../model/refresh-access-token/refresh-access-token-body-type';

export const refreshAccessToken = async (body: RefreshAccessTokenBodyType) => {
	const response = await baseApi.post<AuthType>(
		'auth/refresh-access-token',
		body
	);

	return response.data;
};
