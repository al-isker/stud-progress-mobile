import { requestPermissionsAsync } from 'expo-notifications';
import { WAS_REQUESTED_NOTIFICATION_PERMISSIONS_STORAGE_KEY } from '@/shared/config/storage';
import { AsyncJSONStorage } from '@/shared/lib/async-json-storage';
import { useAsyncEffect } from '@/shared/lib/react-sugar';

export const useRequestNotificationPermissions = () => {
	useAsyncEffect(async () => {
		const wasRequestedNotificationPermissions =
			await AsyncJSONStorage.getItem<boolean>(
				WAS_REQUESTED_NOTIFICATION_PERMISSIONS_STORAGE_KEY
			);

		if (!wasRequestedNotificationPermissions) {
			requestPermissionsAsync();

			AsyncJSONStorage.setItem(
				WAS_REQUESTED_NOTIFICATION_PERMISSIONS_STORAGE_KEY,
				true
			);
		}
	}, []);
};
