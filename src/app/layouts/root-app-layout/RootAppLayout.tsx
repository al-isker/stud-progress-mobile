import { PushNotificationProvider } from '@/entities/push-notification';
import { FontsProvider } from '../../providers/fonts-provider/FontsProvider';
import { KeyboardProvider } from '../../providers/keyboard-provider/KeyboardProvider';
import { QueryProvider } from '../../providers/query-provider/QueryProvider';
import { RootNavigation } from './RootNavigation';
import { RootSafeArea } from './RootSafeArea';

export const RootAppLayout = () => (
	<QueryProvider>
		<FontsProvider>
			<KeyboardProvider>
				<PushNotificationProvider>
					<RootSafeArea>
						<RootNavigation />
					</RootSafeArea>
				</PushNotificationProvider>
			</KeyboardProvider>
		</FontsProvider>
	</QueryProvider>
);
