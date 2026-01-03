import { Link } from 'expo-router';
import { links } from '@/shared/config/navigation';
import { Command } from '@/shared/ui/command';
import { ArrowRightIcon, FileTextIcon } from '@/shared/ui/icons';

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
