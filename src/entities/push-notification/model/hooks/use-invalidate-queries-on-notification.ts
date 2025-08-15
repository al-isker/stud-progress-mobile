import { Notification } from 'expo-notifications';
import { useQueryClient } from '@tanstack/react-query';
import { SUBJECT_GRADE_KEY, SUBJECT_RATING_KEY } from '@/shared/api';
import { PushNotificationDataType } from '../types/push-notification-data';
import { PushNotificationTypeEnum } from '../types/push-notification-type';

export const useInvalidateQueriesOnNotification = () => {
	const queryClient = useQueryClient();

	return (notification: Notification) => {
		const data = notification.request.content.data as PushNotificationDataType;

		switch (data.type) {
			case PushNotificationTypeEnum.GRADE_UPDATED:
				queryClient.invalidateQueries({
					queryKey: [SUBJECT_GRADE_KEY]
				});
				break;

			case PushNotificationTypeEnum.EVENT_CREATED:
			case PushNotificationTypeEnum.EVENT_UPDATED:
				queryClient.invalidateQueries({
					queryKey: [SUBJECT_RATING_KEY]
				});
				break;
		}
	};
};
