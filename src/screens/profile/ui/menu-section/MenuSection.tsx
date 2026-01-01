import { Divider } from '@/shared/ui/divider';
import { Paper } from '@/shared/ui/paper';
import { MenuLogout } from './MenuLogout';
import { MenuNews } from './MenuNews';
import { MenuNotificationPermissions } from './MenuNotificationPermissions';
import { MenuPrivacyPolicy } from './MenuPrivacyPolicy';
import { MenuSupport } from './MenuSupport';
import { MenuUpdateSemester } from './MenuUpdateSemester';

export const MenuSection = () => (
	<Paper contentContainerStyle={{ overflow: 'hidden' }}>
		<MenuNotificationPermissions />
		<Divider />
		<MenuUpdateSemester />
		<Divider />
		<MenuNews />
		<Divider />
		<MenuPrivacyPolicy />
		<Divider />
		<MenuSupport />
		<Divider />
		<MenuLogout />
	</Paper>
);
