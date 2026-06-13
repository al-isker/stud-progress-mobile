import { useLogout } from '@/features/logout';
import { Command } from '@/shared/ui/command';
import { ArrowRightIcon, ExitIcon } from '@/shared/ui/icons';

export const MenuLogout = () => {
	const { logout } = useLogout();

	return (
		<Command
			variant='text'
			color='danger'
			size='large'
			title='Выйти'
			renderLeftIcon={ExitIcon}
			renderRightIcon={ArrowRightIcon}
			onPress={logout}
		/>
	);
};
