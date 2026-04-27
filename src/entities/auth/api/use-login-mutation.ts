import { useMutation } from '@tanstack/react-query';
import { LoginBodyType } from '../model/login/login-body-type';
import { authApi } from './auth-api';

export const useLoginMutation = () => {
	return useMutation({
		mutationFn: (body: LoginBodyType) => authApi.login(body)
	});
};
