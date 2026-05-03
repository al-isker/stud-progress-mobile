import { dayjsLocalization } from '@/shared/lib/i18n';
import { splashScreenConfigure } from '@/shared/lib/splash-screen';
import { unistylesConfigure } from '@/shared/lib/theme';
import { authConfigure } from './auth/auth-configure';
import { pushNotificationConfigure } from './push-notification/push-notification-configure';

splashScreenConfigure();
unistylesConfigure();
authConfigure();
dayjsLocalization();
pushNotificationConfigure();
