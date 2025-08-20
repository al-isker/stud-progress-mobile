import { PermissionStatus } from 'expo-notifications';
import { useNotificationPermissions } from '@/entities/push-notification';
import { BellIcon } from '@/shared/assets/icons';
import { Command } from '@/shared/ui/command';
import { Switch } from '@/shared/ui/switch';

export const MenuNotificationPermissions = () => {
	const { status, toggle } = useNotificationPermissions();

	return (
		<Command
			variant='text'
			size='large'
			title='Уведомления'
			startSlot={<BellIcon />}
			endSlot={
				status && (
					<Switch
						value={status === PermissionStatus.GRANTED}
						onChange={toggle}
					/>
				)
			}
			onPress={toggle}
		/>
	);
};
