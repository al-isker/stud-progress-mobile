import { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { UnistylesRuntime } from 'react-native-unistyles';
import { useLogin } from '@/features/login';
import { LoadingScreen } from '@/shared/ui/loading-screen';

export const LoginLoadingScreen = () => {
	const { progress, login } = useLogin();

	useEffect(() => {
		login();
	}, []);

	return (
		<>
			<StatusBar style='light' />

			<LoadingScreen
				safeAreaInsets={{
					top: UnistylesRuntime.insets.top,
					bottom: UnistylesRuntime.insets.bottom
				}}
				description='не выходи с приложения, это займёт около минуты...'
				progress={progress}
			/>
		</>
	);
};
