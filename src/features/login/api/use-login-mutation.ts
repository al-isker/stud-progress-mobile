import { useMutation, useQueryClient } from '@tanstack/react-query';
import { loginFn } from '@/shared/api';

export const useLoginMutation = () => {
	const queryClient = useQueryClient();

	const handleSuccess = () => {
		queryClient.clear();
	};

	return useMutation({
		mutationFn: loginFn,
		onSuccess: handleSuccess
	});
};
