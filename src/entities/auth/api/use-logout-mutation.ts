import { useMutation } from '@tanstack/react-query';
import { authApi } from '@/shared/api';

export const useLogoutMutation = () => {
	return useMutation({
		mutationFn: () => authApi.logout()
	});
};
