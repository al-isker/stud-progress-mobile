import { Divider } from '@/shared/ui/divider';
import { Paper } from '@/shared/ui/paper';
import { MenuLogout } from './MenuLogout';
import { MenuNotificationPermissions } from './MenuNotificationPermissions';
import { MenuPrivacyPolicy } from './MenuPrivacyPolicy';
import { MenuUpdateSemester } from './MenuUpdateSemester';

export const MenuSection = () => {
	return (
		<Paper style={{ overflow: 'hidden' }}>
			<MenuNotificationPermissions />
			<Divider />
			<MenuPrivacyPolicy />
			<Divider />
			<MenuUpdateSemester />
			<Divider />
			<MenuLogout />
		</Paper>
	);
};
