import { Link } from 'expo-router';
import { ArrowRightIcon } from '@/shared/assets/icons';
import { ChatLineIcon } from '@/shared/assets/icons/ui/ChatLineIcon';
import { links } from '@/shared/config/navigation';
import { Command } from '@/shared/ui/command';

export const MenuNews = () => {
	return (
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
};
