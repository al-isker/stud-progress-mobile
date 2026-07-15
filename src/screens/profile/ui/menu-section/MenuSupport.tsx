import { Link } from 'expo-router';
import { LINKS } from '@/shared/config/navigation';
import { Command } from '@/shared/ui/command';
import { ArrowRightIcon, SettingsIcon } from '@/shared/ui/icons';

export const MenuSupport = () => (
	<Link href={LINKS.telegramSupport} asChild>
		<Command
			variant='text'
			size='large'
			title='Поддержка'
			renderLeftIcon={SettingsIcon}
			renderRightIcon={ArrowRightIcon}
		/>
	</Link>
);
