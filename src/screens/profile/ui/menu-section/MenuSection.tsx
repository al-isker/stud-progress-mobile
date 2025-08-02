import { Divider } from '@/shared/ui/divider';
import { Paper } from '@/shared/ui/paper';
import { MenuLogout } from './MenuLogout';
import { MenuPrivacyPolicy } from './MenuPrivacyPolicy';
import { MenuUpdateSemester } from './MenuUpdateSemester';

export const MenuSection = () => {
	return (
		<Paper style={{ overflow: 'hidden' }}>
			<MenuPrivacyPolicy />
			<Divider />
			<MenuUpdateSemester />
			<Divider />
			<MenuLogout />
		</Paper>
	);
};
