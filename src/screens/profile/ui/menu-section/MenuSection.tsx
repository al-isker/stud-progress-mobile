import { ArrowRightIcon, SmartphoneUpdateIcon } from '@/shared/assets/icons';
import { Command } from '@/shared/ui/command';
import { Divider } from '@/shared/ui/divider';
import { Paper } from '@/shared/ui/paper';
import { MenuLogout } from './MenuLogout';
import { MenuPrivacyPolicy } from './MenuPrivacyPolicy';

export const MenuSection = () => {
	return (
		<Paper style={{ overflow: 'hidden' }}>
			<MenuPrivacyPolicy />

			<Divider />

			<Command
				variant='text'
				size='large'
				title='Изменить семестр'
				startSlot={<SmartphoneUpdateIcon />}
				endSlot={<ArrowRightIcon />}
			/>

			<Divider />

			<MenuLogout />
		</Paper>
	);
};
