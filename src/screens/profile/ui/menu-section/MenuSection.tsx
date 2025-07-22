import {
	ArrowRightIcon,
	FileTextIcon,
	SmartphoneUpdateIcon
} from '@/shared/assets/icons';
import { Command } from '@/shared/ui/command';
import { Divider } from '@/shared/ui/divider';
import { Paper } from '@/shared/ui/paper';
import { MenuLogout } from './MenuLogout';

export const MenuSection = () => {
	return (
		<Paper style={{ overflow: 'hidden' }}>
			<Command
				variant='text'
				size='large'
				title='Политика конфиденциальности'
				startSlot={<FileTextIcon />}
				endSlot={<ArrowRightIcon />}
			/>

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
