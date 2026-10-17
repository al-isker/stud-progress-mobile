import { KeyboardProvider } from '../../providers/keyboard-provider/KeyboardProvider';
import { PushNotificationProvider } from '../../providers/push-notification-provider/PushNotificationProvider';
import { QueryProvider } from '../../providers/query-provider/QueryProvider';
import { SkiaFontProvider } from '../../providers/skia-font-provider/SkiaFontProvider';
import { RootNavigation } from './RootNavigation';
import { RootSafeArea } from './RootSafeArea';

export const RootAppLayout = () => (
	<QueryProvider>
		<SkiaFontProvider>
			<KeyboardProvider>
				<PushNotificationProvider>
					<RootSafeArea>
						<RootNavigation />
					</RootSafeArea>
				</PushNotificationProvider>
			</KeyboardProvider>
		</SkiaFontProvider>
	</QueryProvider>
);
