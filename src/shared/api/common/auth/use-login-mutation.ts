import { useMutation } from '@tanstack/react-query';
import { authApi } from './auth-api';
import { LoginBodyType } from './types/login-body-type';

export const useLoginMutation = () => {
	return useMutation({
		mutationFn: (body: LoginBodyType) => authApi.login(body)
	});
};
