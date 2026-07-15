import { Link } from 'expo-router';
import { LINKS } from '@/shared/config/navigation';
import { Command } from '@/shared/ui/command';
import { ArrowRightIcon, FileTextIcon } from '@/shared/ui/icons';

export const MenuPrivacyPolicy = () => (
	<Link href={LINKS.privacyPolicy} asChild>
		<Command
			variant='text'
			size='large'
			title='Политика конфиденциальности'
			renderLeftIcon={FileTextIcon}
			renderRightIcon={ArrowRightIcon}
		/>
	</Link>
);
