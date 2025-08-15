import { Stack } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { PushNotificationProvider } from '@/entities/push-notification';
import { ScreenNames } from '@/shared/config/navigation';
import { FontsProvider } from '../../providers/fonts-provider/FontsProvider';
import { QueryProvider } from '../../providers/query-provider/QueryProvider';
import { UnistylesProvider } from '../../providers/unistyles-provider/UnistylesProvider';
import { runAppConfig } from './run-app-config';

runAppConfig();

export const RootAppLayout = () => (
	<QueryProvider>
		<FontsProvider>
			<UnistylesProvider>
				<PushNotificationProvider>
					<SafeAreaView style={{ height: '100%' }}>
						<Stack screenOptions={{ headerShown: false }}>
							<Stack.Screen name={ScreenNames.MAIN} />
							<Stack.Screen name={ScreenNames.LOGIN} />
							<Stack.Screen name={ScreenNames.UPDATE_SEMESTER} />
						</Stack>
					</SafeAreaView>
				</PushNotificationProvider>
			</UnistylesProvider>
		</FontsProvider>
	</QueryProvider>
);
