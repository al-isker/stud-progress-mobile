import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useStyles } from 'react-native-unistyles';
import { LoginContextProvider } from './LoginContextProvider';

export const LoginAppLayout = () => {
	const { theme } = useStyles();

	return (
		<>
			<StatusBar style='light' backgroundColor={theme.colors.primary} />

			<LoginContextProvider>
				<Stack screenOptions={{ headerShown: false }} />
			</LoginContextProvider>
		</>
	);
};
