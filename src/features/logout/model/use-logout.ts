import { router } from 'expo-router';
import { clearAuthTokens, useLogoutMutation } from '@/shared/api';
import { routes } from '@/shared/config/navigation';

export const useLogout = () => {
	const { mutate } = useLogoutMutation();

	const logout = () => {
		mutate();

		clearAuthTokens();

		router.dismissTo(routes.loginSemesterForm);
	};

	return { logout };
};
