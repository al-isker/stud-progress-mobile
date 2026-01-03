import { Link } from 'expo-router';
import { links } from '@/shared/config/navigation';
import { Command } from '@/shared/ui/command';
import { ArrowRightIcon } from '@/shared/ui/icons';
import { ChatLineIcon } from '@/shared/ui/icons/ui/ChatLineIcon';

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
