import { Link } from 'expo-router';
import { ArrowRightIcon, SettingsIcon } from '@/shared/assets/icons';
import { links } from '@/shared/config/navigation';
import { Command } from '@/shared/ui/command';

export const MenuSupport = () => {
	return (
		<Link href={links.telegramSupport} asChild>
			<Command
				variant='text'
				size='large'
				title='Поддержка'
				startSlot={<SettingsIcon />}
				endSlot={<ArrowRightIcon />}
			/>
		</Link>
	);
};
