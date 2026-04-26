import { useMutation } from '@tanstack/react-query';
import { LoginBodyType, authApi } from '@/shared/api';

export const useLoginMutation = () => {
	return useMutation({
		mutationFn: (body: LoginBodyType) => authApi.login(body)
	});
};
