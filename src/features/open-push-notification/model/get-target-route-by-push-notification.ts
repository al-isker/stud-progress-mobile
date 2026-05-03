import { Notification } from 'expo-notifications';
import { routes } from '@/shared/config/navigation';
import {
	PushNotificationDataType,
	PushNotificationTypeEnum
} from '@/shared/lib/push-notifications';

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
