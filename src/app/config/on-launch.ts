import { authInterceptors } from '@/entities/auth';
import { pushNotificationHandler } from '@/entities/push-notification';
import { dayjsLocalization } from '@/shared/lib/i18n';
import { splashScreenConfigure } from '@/shared/lib/splash-screen';
import { unistylesConfigure } from '@/shared/lib/theme';

splashScreenConfigure();
unistylesConfigure();
authInterceptors();
dayjsLocalization();
pushNotificationHandler();
