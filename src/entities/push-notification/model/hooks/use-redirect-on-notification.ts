import { Notification } from 'expo-notifications';
import { router } from 'expo-router';
import { routes } from '@/shared/config/navigation';
import { PushNotificationDataType } from '../types/push-notification-data';
import { PushNotificationTypeEnum } from '../types/push-notification-type';

export const useRedirectOnNotification = () => {
	return (notification: Notification) => {
		const data = notification.request.content.data as PushNotificationDataType;

		switch (data.type) {
			case PushNotificationTypeEnum.GRADE_UPDATED:
				router.push(routes.subjectGrade);
				break;

			case PushNotificationTypeEnum.EVENT_CREATED:
			case PushNotificationTypeEnum.EVENT_UPDATED:
				router.push(routes.subjectByIdRating(parseInt(data.subjectId)));
				break;
		}
	};
};
