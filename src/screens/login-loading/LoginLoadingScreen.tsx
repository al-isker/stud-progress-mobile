import { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { useUnistyles } from 'react-native-unistyles';
import { useLogin } from '@/features/login';
import { LoadingScreen } from '@/shared/ui/loading-screen';

export const LoginLoadingScreen = () => {
	const { rt } = useUnistyles();

	const { progress, login } = useLogin();

	useEffect(() => {
		login();
	}, []);

	return (
		<>
			<StatusBar style='light' />

			<LoadingScreen
				safeAreaInsets={{
					top: rt.insets.top,
					bottom: rt.insets.bottom
				}}
				description='не выходи с приложения, это займёт около минуты...'
				progress={progress}
			/>
		</>
	);
};
