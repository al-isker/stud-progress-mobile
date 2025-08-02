import { Link } from 'expo-router';
import { ArrowRightIcon, SmartphoneUpdateIcon } from '@/shared/assets/icons';
import { routes } from '@/shared/config/navigation';
import { Command } from '@/shared/ui/command';

export const MenuUpdateSemester = () => {
	return (
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
};
