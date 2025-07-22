import { useLogout } from '@/features/logout';
import { ArrowRightIcon, ExitIcon } from '@/shared/assets/icons';
import { Command } from '@/shared/ui/command';

export const MenuLogout = () => {
	const { logout } = useLogout();

	return (
		<Command
			variant='danger'
			size='large'
			title='Выйти'
			startSlot={<ExitIcon />}
			endSlot={<ArrowRightIcon />}
			onPress={logout}
		/>
	);
};
