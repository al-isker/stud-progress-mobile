import { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useLogin } from '@/features/login';
import { LoadingScreen } from '@/shared/ui/loading-screen';

export const LoginLoadingScreen = () => {
	const safeAreaInsets = useSafeAreaInsets();

	const { progress, login } = useLogin();

	useEffect(() => {
		login();
	}, []);

	return (
		<>
			<StatusBar style='light' />

			<LoadingScreen
				safeAreaInsets={{
					top: safeAreaInsets.top,
					bottom: safeAreaInsets.bottom
				}}
				description='не выходи с приложения, это займёт около минуты...'
				progress={progress}
			/>
		</>
	);
};
