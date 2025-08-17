import { runAuthInterceptors } from '@/entities/auth';
import { runPushNotificationHandler } from '@/entities/push-notification';
import { runDayjsLocalization } from '../../config/dayjs/run-dayjs-localization';
import { runSplashScreen } from '../../config/splash-screen/run-splash-screen';

export const runAppConfig = () => {
	runSplashScreen();
	runAuthInterceptors();
	runDayjsLocalization();
	runPushNotificationHandler();
};
