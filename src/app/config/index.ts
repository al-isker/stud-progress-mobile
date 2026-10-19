import { i18nConfigure } from '@/shared/config/i18n';
import { unistylesConfigure } from '@/shared/lib/theme';
import { authConfigure } from './auth/auth-configure';
import { pushNotificationConfigure } from './push-notification/push-notification-configure';
import { splashScreenConfigure } from './splash-screen/splash-screen-configure';

splashScreenConfigure();
unistylesConfigure();
authConfigure();
i18nConfigure();
pushNotificationConfigure();
