import { useMutation, useQueryClient } from '@tanstack/react-query';
import { LoginBodyType, authApi } from '@/shared/api';

export const useLoginMutation = () => {
	const queryClient = useQueryClient();

	const handleSuccess = () => {
		queryClient.clear();
	};

	return useMutation({
		mutationFn: (body: LoginBodyType) => authApi.login(body),
		onSuccess: handleSuccess
	});
};
