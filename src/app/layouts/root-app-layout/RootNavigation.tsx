import { Stack } from 'expo-router';
import { SCREEN_NAMES } from '@/shared/config/navigation';

export const RootNavigation = () => (
	<Stack
		screenOptions={{
			animation: 'simple_push',
			headerShown: false
		}}
	>
		<Stack.Screen name={SCREEN_NAMES.PRELOAD_STATUS} />
		<Stack.Screen name={SCREEN_NAMES.LOGIN} />
		<Stack.Screen name={SCREEN_NAMES.UPDATE_SEMESTER} />
		<Stack.Screen name={SCREEN_NAMES.MAIN} />
	</Stack>
);
