import { Link } from 'expo-router';
import { LINKS } from '@/shared/config/navigation';
import { Command } from '@/shared/ui/command';
import { ArrowRightIcon, ChatLineIcon } from '@/shared/ui/icons';

export const MenuNews = () => (
	<Link href={LINKS.telegramChannel} asChild>
		<Command
			variant='text'
			size='large'
			title='Новости'
			renderLeftIcon={ChatLineIcon}
			renderRightIcon={ArrowRightIcon}
		/>
	</Link>
);
