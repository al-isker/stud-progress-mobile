import { Stack } from 'expo-router';
import { ScreenNames } from '@/shared/config/navigation';

export const RootNavigation = () => (
	<Stack
		screenOptions={{
			animation: 'simple_push',
			headerShown: false
		}}
	>
		<Stack.Screen name={ScreenNames.PRELOAD_STATUS} />
		<Stack.Screen name={ScreenNames.LOGIN} />
		<Stack.Screen name={ScreenNames.UPDATE_SEMESTER} />
		<Stack.Screen name={ScreenNames.MAIN} />
	</Stack>
);
