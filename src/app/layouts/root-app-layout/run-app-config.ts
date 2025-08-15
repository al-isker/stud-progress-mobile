import { runAuthInterceptors } from '@/entities/auth';
import { runPushNotificationHandler } from '@/entities/push-notification';
import { runDayjsLocalization } from '../../config/dayjs/run-dayjs-localization';

export const runAppConfig = () => {
	runAuthInterceptors();
	runDayjsLocalization();
	runPushNotificationHandler();
};
