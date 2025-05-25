import { ILoginForm } from '../model/types/login-form';
import { ILoginResponse } from '../model/types/login-response';
import { authApi } from './auth-api';

export const loginFn = async (form: ILoginForm) => {
	return (await authApi.post<ILoginResponse>('auth/login', form)).data;
};
