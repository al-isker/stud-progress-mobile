import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useStyles } from 'react-native-unistyles';
import { ScreenNames } from '@/shared/config/navigation';
import { LoginContextProvider } from './LoginContextProvider';

export const LoginAppLayout = () => {
	const { theme } = useStyles();

	return (
		<>
			<StatusBar style='light' />

			<LoginContextProvider>
				<SafeAreaView
					edges={['top']}
					style={{ backgroundColor: theme.colors.primary }}
				/>

				<Stack screenOptions={{ headerShown: false }}>
					<Stack.Screen name={ScreenNames.LOGIN_FORM} />
					<Stack.Screen name={ScreenNames.LOGIN_LOADING} />
				</Stack>
			</LoginContextProvider>
		</>
	);
};
