import { Stack } from 'expo-router';
import { Header } from '@/widgets/header';
import { useRequestNotificationPermissions } from '@/entities/push-notification';
import { ScreenNames } from '@/shared/config/navigation';

export const MainAppLayout = () => {
	useRequestNotificationPermissions();

	return (
		<Stack screenOptions={{ header: () => <Header /> }}>
			<Stack.Screen
				name={ScreenNames.TABS}
				options={{
					animation: 'none'
				}}
			/>
			<Stack.Screen
				name={ScreenNames.SUBJECT_BY_ID_RATING}
				options={{
					animation: 'fade_from_bottom'
				}}
			/>
		</Stack>
	);
};
