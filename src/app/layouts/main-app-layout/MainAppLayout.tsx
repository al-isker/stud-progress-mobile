import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useUnistyles } from 'react-native-unistyles';
import { Header } from '@/widgets/header';
import { SCREEN_NAMES } from '@/shared/config/navigation';

export const MainAppLayout = () => {
	const { rt } = useUnistyles();

	return (
		<>
			<StatusBar style='light' />

			<Header safeAreaInsetTop={rt.insets.top} />

			<Stack screenOptions={{ headerShown: false }}>
				<Stack.Screen
					name={SCREEN_NAMES.TABS}
					options={{ animation: 'none' }}
				/>
				<Stack.Screen
					name={SCREEN_NAMES.SUBJECT_BY_ID_RATING}
					options={{ animation: 'simple_push' }}
				/>
			</Stack>
		</>
	);
};
