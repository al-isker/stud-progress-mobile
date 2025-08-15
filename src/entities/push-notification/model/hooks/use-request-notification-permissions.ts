import {
	PermissionStatus,
	getPermissionsAsync,
	requestPermissionsAsync
} from 'expo-notifications';
import { useAsyncEffect } from '@/shared/lib/react-sugar';

export const useRequestNotificationPermissions = () => {
	useAsyncEffect(async () => {
		const existingPermissions = await getPermissionsAsync();

		if (existingPermissions.status === PermissionStatus.UNDETERMINED) {
			requestPermissionsAsync();
		}
	}, []);
};
