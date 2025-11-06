import { Stack } from 'expo-router';
import { ScreenNames } from '@/shared/config/navigation';
import { LoginContextProvider } from './LoginContextProvider';

export const LoginAppLayout = () => (
	<LoginContextProvider>
		<Stack
			screenOptions={{
				animation: 'simple_push',
				headerShown: false
			}}
		>
			<Stack.Screen name={ScreenNames.LOGIN_FORM} />
			<Stack.Screen name={ScreenNames.LOGIN_LOADING} />
		</Stack>
	</LoginContextProvider>
);
