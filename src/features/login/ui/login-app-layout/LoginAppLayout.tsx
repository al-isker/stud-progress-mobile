import { Stack } from 'expo-router';
import { SCREEN_NAMES } from '@/shared/config/navigation';
import { LoginContextProvider } from './LoginContextProvider';

export const LoginAppLayout = () => (
	<LoginContextProvider>
		<Stack
			screenOptions={{
				animation: 'simple_push',
				headerShown: false
			}}
		>
			<Stack.Screen name={SCREEN_NAMES.LOGIN_FORM} />
			<Stack.Screen name={SCREEN_NAMES.LOGIN_LOADING} />
		</Stack>
	</LoginContextProvider>
);
