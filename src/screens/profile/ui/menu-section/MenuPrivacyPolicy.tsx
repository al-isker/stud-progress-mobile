import { Link } from 'expo-router';
import { ArrowRightIcon, FileTextIcon } from '@/shared/assets/icons';
import { links } from '@/shared/config/navigation';
import { Command } from '@/shared/ui/command';

export const MenuPrivacyPolicy = () => (
	<Link href={links.privacyPolicy} asChild>
		<Command
			variant='text'
			size='large'
			title='Политика конфиденциальности'
			startSlot={<FileTextIcon />}
			endSlot={<ArrowRightIcon />}
		/>
	</Link>
);
