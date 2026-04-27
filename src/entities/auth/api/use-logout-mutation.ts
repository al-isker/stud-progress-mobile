import { useMutation } from '@tanstack/react-query';
import { authApi } from './auth-api';

export const useLogoutMutation = () => {
	return useMutation({
		mutationFn: () => authApi.logout()
	});
};
