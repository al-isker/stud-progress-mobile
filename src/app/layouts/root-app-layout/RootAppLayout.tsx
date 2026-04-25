import { PushNotificationProvider } from '@/entities/push-notification';
import { KeyboardProvider } from '../../providers/keyboard-provider/KeyboardProvider';
import { QueryProvider } from '../../providers/query-provider/QueryProvider';
import { RootNavigation } from './RootNavigation';
import { RootSafeArea } from './RootSafeArea';

export const RootAppLayout = () => (
	<QueryProvider>
		<KeyboardProvider>
			<PushNotificationProvider>
				<RootSafeArea>
					<RootNavigation />
				</RootSafeArea>
			</PushNotificationProvider>
		</KeyboardProvider>
	</QueryProvider>
);
