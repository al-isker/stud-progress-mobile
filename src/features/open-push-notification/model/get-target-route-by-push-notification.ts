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
		case PushNotificationTypeEnum.GRADE_UPDATED:
			return routes.subjectGrade;

		case PushNotificationTypeEnum.EVENT_CREATED:
		case PushNotificationTypeEnum.EVENT_UPDATED:
			return routes.subjectByIdRating(parseInt(data.subjectId));

		default:
			return;
	}
};
