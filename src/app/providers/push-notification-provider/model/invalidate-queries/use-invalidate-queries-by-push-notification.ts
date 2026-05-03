import { Notification } from 'expo-notifications';
import { useQueryClient } from '@tanstack/react-query';
import { SUBJECT_GRADE_KEY, SUBJECT_RATING_KEY } from '@/shared/api';
import {
	PushNotificationDataType,
	PushNotificationTypeEnum
} from '@/shared/lib/push-notifications';

export const useInvalidateQueriesByPushNotification = () => {
	const queryClient = useQueryClient();

	const invalidateQueriesByPushNotification = (notification: Notification) => {
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

	return invalidateQueriesByPushNotification;
};
