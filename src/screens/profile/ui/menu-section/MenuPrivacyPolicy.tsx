import { Link } from 'expo-router';
import { ArrowRightIcon, FileTextIcon } from '@/shared/assets/icons';
import { routes } from '@/shared/config/navigation';
import { Command } from '@/shared/ui/command';

export const MenuPrivacyPolicy = () => {
	return (
		<Link href={routes.privacyPolicy} asChild>
			<Command
				variant='text'
				size='large'
				title='Политика конфиденциальности'
				startSlot={<FileTextIcon />}
				endSlot={<ArrowRightIcon />}
			/>
		</Link>
	);
};
