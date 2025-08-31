import { useEffect } from 'react';
import { useLogin } from '@/features/login';
import { LoadingScreen } from '@/shared/ui/loading-screen';

export const LoginLoadingScreen = () => {
	const { progress, login } = useLogin();

	useEffect(() => {
		login();
	}, []);

	return (
		<LoadingScreen
			description='не выходи с приложения, это займёт около минуты...'
			progress={progress}
		/>
	);
};
