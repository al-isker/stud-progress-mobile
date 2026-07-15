import { requestPermissionsAsync } from 'expo-notifications';
import { STORAGE_KEYS } from '@/shared/config/storage';
import { AsyncJSONStorage } from '@/shared/lib/async-json-storage';

export const requestNotificationPermissionsOnce = async () => {
	const wasRequestedNotificationPermissions =
		await AsyncJSONStorage.getItem<boolean>(
			STORAGE_KEYS.wasRequestedNotificationPermissions
		);

	if (!wasRequestedNotificationPermissions) {
		await requestPermissionsAsync();

		await AsyncJSONStorage.setItem(
			STORAGE_KEYS.wasRequestedNotificationPermissions,
			true
		);
	}
};
