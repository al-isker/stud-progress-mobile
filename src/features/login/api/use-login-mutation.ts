import { useMutation, useQueryClient } from '@tanstack/react-query';
import { loginFn } from '@/shared/api';
import { PROFILE_KEY, SUBJECT_KEY } from '@/shared/api/const/query-keys';

export const useLoginMutation = () => {
	const queryClient = useQueryClient();

	const handleSuccess = () => {
		queryClient.invalidateQueries({ queryKey: [SUBJECT_KEY] });
		queryClient.invalidateQueries({ queryKey: [PROFILE_KEY] });
	};

	return useMutation({
		mutationFn: loginFn,
		onSuccess: handleSuccess
	});
};
