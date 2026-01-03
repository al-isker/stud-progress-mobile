import { Link } from 'expo-router';
import { routes } from '@/shared/config/navigation';
import { Command } from '@/shared/ui/command';
import { ArrowRightIcon, SmartphoneUpdateIcon } from '@/shared/ui/icons';

export const MenuUpdateSemester = () => (
	<Link href={routes.updateSemesterForm} asChild>
		<Command
			variant='text'
			size='large'
			title='Изменить семестр'
			startSlot={<SmartphoneUpdateIcon />}
			endSlot={<ArrowRightIcon />}
		/>
	</Link>
);
