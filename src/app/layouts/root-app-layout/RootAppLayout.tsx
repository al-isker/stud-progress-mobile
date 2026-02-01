import { Stack } from 'expo-router';
import { PushNotificationProvider } from '@/entities/push-notification';
import { ScreenNames } from '@/shared/config/navigation';
import { FontsProvider } from '../../providers/fonts-provider/FontsProvider';
import { KeyboardProvider } from '../../providers/keyboard-provider/KeyboardProvider';
import { QueryProvider } from '../../providers/query-provider/QueryProvider';
import { RootSafeAreaView } from './RootSafeAreaView';

export const RootAppLayout = () => (
	<QueryProvider>
		<FontsProvider>
			<KeyboardProvider>
				<PushNotificationProvider>
					<RootSafeAreaView>
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
					</RootSafeAreaView>
				</PushNotificationProvider>
			</KeyboardProvider>
		</FontsProvider>
	</QueryProvider>
);
