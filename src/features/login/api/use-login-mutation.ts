import { useMutation, useQueryClient } from '@tanstack/react-query';
import { api } from '@/shared/api';
import { PROFILE_KEY, SUBJECT_KEY } from '@/shared/api/const/query-keys';
import { ILoginForm } from '../model/types/login-form';
import { ILoginResponse } from '../model/types/login-response';

const loginMutationFn = async (body: ILoginForm) => {
	return (await api.post<ILoginResponse>('auth/login', body)).data;
};

export const useLoginMutation = () => {
	const queryClient = useQueryClient();

	const handleSuccess = () => {
		queryClient.invalidateQueries({ queryKey: [SUBJECT_KEY] });
		queryClient.invalidateQueries({ queryKey: [PROFILE_KEY] });
	};

	return useMutation({
		mutationFn: loginMutationFn,
		onSuccess: handleSuccess
	});
};
