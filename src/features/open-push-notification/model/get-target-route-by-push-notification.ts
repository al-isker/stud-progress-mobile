import { Notification } from 'expo-notifications';
import {
	PushNotificationDataType,
	PushNotificationTypeEnum
} from '@/shared/api';
import { routes } from '@/shared/config/navigation';

export const getTargetRouteByPushNotification = (
	notification: Notification
) => {
	const data = notification.request.content.data as PushNotificationDataType;

	switch (data.type) {
		case PushNotificationTypeEnum.EXAMPLE:
			return routes.profile;

		default:
			return null;
	}
};
