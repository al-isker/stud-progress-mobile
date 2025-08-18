import { Divider } from '@/shared/ui/divider';
import { Paper } from '@/shared/ui/paper';
import { MenuLogout } from './MenuLogout';
import { MenuNotificationPermissions } from './MenuNotificationPermissions';
import { MenuUpdateSemester } from './MenuUpdateSemester';

export const MenuSection = () => {
	return (
		<Paper style={{ overflow: 'hidden' }}>
			<MenuNotificationPermissions />
			<Divider />
			<MenuUpdateSemester />
			<Divider />
			<MenuLogout />
		</Paper>
	);
};
