import { Link } from 'expo-router';
import { links } from '@/shared/config/navigation';
import { Command } from '@/shared/ui/command';
import { ArrowRightIcon, ChatLineIcon } from '@/shared/ui/icons';

export const MenuNews = () => (
	<Link href={links.telegramChannel} asChild>
		<Command
			variant='text'
			size='large'
			title='Новости'
			startSlot={<ChatLineIcon />}
			endSlot={<ArrowRightIcon />}
		/>
	</Link>
);
