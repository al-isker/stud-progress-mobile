import { requestPermissionsAsync } from 'expo-notifications';
import { WAS_REQUESTED_NOTIFICATION_PERMISSIONS_STORAGE_KEY } from '@/shared/config/storage';
import { AsyncJSONStorage } from '../../async-json-storage';

export const requestNotificationPermissionsOnce = async () => {
	const wasRequestedNotificationPermissions =
		await AsyncJSONStorage.getItem<boolean>(
			WAS_REQUESTED_NOTIFICATION_PERMISSIONS_STORAGE_KEY
		);

	if (!wasRequestedNotificationPermissions) {
		await requestPermissionsAsync();

		await AsyncJSONStorage.setItem(
			WAS_REQUESTED_NOTIFICATION_PERMISSIONS_STORAGE_KEY,
			true
		);
	}
};
