import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useUnistyles } from 'react-native-unistyles';
import { Header } from '@/widgets/header';
import { ScreenNames } from '@/shared/config/navigation';

export const MainAppLayout = () => {
	const { rt } = useUnistyles();

	return (
		<>
			<StatusBar style='light' />

			<Header safeAreaInsetTop={rt.insets.top} />

			<Stack screenOptions={{ headerShown: false }}>
				<Stack.Screen name={ScreenNames.TABS} options={{ animation: 'none' }} />
				<Stack.Screen
					name={ScreenNames.SUBJECT_BY_ID_RATING}
					options={{ animation: 'simple_push' }}
				/>
			</Stack>
		</>
	);
};
