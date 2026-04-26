import { PushNotificationProvider } from '@/entities/push-notification';
import { KeyboardProvider } from '../../providers/keyboard-provider/KeyboardProvider';
import { QueryProvider } from '../../providers/query-provider/QueryProvider';
import { SkiaFontsProvider } from '../../providers/skia-fonts-provider/SkiaFontsProvider';
import { RootNavigation } from './RootNavigation';
import { RootSafeArea } from './RootSafeArea';

export const RootAppLayout = () => (
	<QueryProvider>
		<SkiaFontsProvider>
			<KeyboardProvider>
				<PushNotificationProvider>
					<RootSafeArea>
						<RootNavigation />
					</RootSafeArea>
				</PushNotificationProvider>
			</KeyboardProvider>
		</SkiaFontsProvider>
	</QueryProvider>
);
