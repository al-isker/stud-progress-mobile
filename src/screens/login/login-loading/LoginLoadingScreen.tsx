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
			caption='загружаем данные, это займёт около минуты...'
			progress={progress}
		/>
	);
};
