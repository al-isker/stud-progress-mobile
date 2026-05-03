import { PermissionStatus } from 'expo-notifications';
import { View } from 'react-native';
import { useManageNotificationPermissions } from '@/features/manage-notification-permissions';
import { Command } from '@/shared/ui/command';
import { BellIcon } from '@/shared/ui/icons';
import { Switch } from '@/shared/ui/switch';

export const MenuNotificationPermissions = () => {
	const { status, toggle } = useManageNotificationPermissions();

	return (
		<Command
			variant='text'
			size='large'
			title='Уведомления'
			startSlot={<BellIcon />}
			endSlot={
				<View style={{ width: 'auto', height: 'auto' }}>
					<Switch
						value={status === PermissionStatus.GRANTED}
						onChange={toggle}
					/>
				</View>
			}
			onPress={toggle}
		/>
	);
};
