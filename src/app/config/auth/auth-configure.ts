import { router } from 'expo-router';
import { authInterceptorsConfigure } from '@/shared/api';
import { routes } from '@/shared/config/navigation';

export const authConfigure = () => {
	const handleUnauthorized = () => {
		router.replace(routes.loginSemesterForm);
	};

	authInterceptorsConfigure({
		onUnauthorized: handleUnauthorized
	});
};
