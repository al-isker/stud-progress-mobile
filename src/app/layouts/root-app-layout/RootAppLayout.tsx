import { Stack } from 'expo-router';
import { PushNotificationProvider } from '@/entities/push-notification';
import { ScreenNames } from '@/shared/config/navigation';
import { FontsProvider } from '../../providers/fonts-provider/FontsProvider';
import { QueryProvider } from '../../providers/query-provider/QueryProvider';
import { RootSafeAreaView } from './RootSafeAreaView';

export const RootAppLayout = () => (
	<QueryProvider>
		<FontsProvider>
			<PushNotificationProvider>
				<RootSafeAreaView>
					<Stack
						screenOptions={{
							animation: 'simple_push',
							headerShown: false
						}}
					>
						<Stack.Screen name={ScreenNames.MAIN} />
						<Stack.Screen name={ScreenNames.LOGIN} />
						<Stack.Screen name={ScreenNames.UPDATE_SEMESTER} />
					</Stack>
				</RootSafeAreaView>
			</PushNotificationProvider>
		</FontsProvider>
	</QueryProvider>
);
