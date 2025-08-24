import { requestPermissionsAsync } from 'expo-notifications';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { WAS_REQUESTED_NOTIFICATION_PERMISSIONS_STORAGE_KEY } from '@/shared/config/storage';
import { useAsyncEffect } from '@/shared/lib/react-sugar';

export const useRequestNotificationPermissions = () => {
	useAsyncEffect(async () => {
		const wasRequestedNotificationPermissions = await JSON.parse(
			String(
				await AsyncStorage.getItem(
					WAS_REQUESTED_NOTIFICATION_PERMISSIONS_STORAGE_KEY
				)
			)
		);

		if (!wasRequestedNotificationPermissions) {
			requestPermissionsAsync();

			AsyncStorage.setItem(
				WAS_REQUESTED_NOTIFICATION_PERMISSIONS_STORAGE_KEY,
				String(true)
			);
		}
	}, []);
};
