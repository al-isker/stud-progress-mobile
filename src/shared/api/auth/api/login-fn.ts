import { ILoginForm } from '../model/types/login-form';
import { ILoginResponse } from '../model/types/login-response';
import { authApi } from './auth-api';

export const loginFn = async (form: ILoginForm) => {
	return authApi.post<ILoginResponse>('auth/login', form).then(res => res.data);
};
