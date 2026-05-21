import { Notification } from 'expo-notifications';
import { useQueryClient } from '@tanstack/react-query';
import { subjectQueryKeys } from '@/entities/subject';
import {
	PushNotificationDataType,
	PushNotificationTypeEnum
} from '@/shared/api';

export const useInvalidateQueriesByPushNotification = () => {
	const queryClient = useQueryClient();

	const invalidateQueriesByPushNotification = (notification: Notification) => {
		const data = notification.request.content.data as PushNotificationDataType;

		switch (data.type) {
			case PushNotificationTypeEnum.GRADE_UPDATED:
			case PushNotificationTypeEnum.EVENT_CREATED:
			case PushNotificationTypeEnum.EVENT_UPDATED:
				queryClient.invalidateQueries({
					queryKey: subjectQueryKeys.all
				});
				break;
		}
	};

	return invalidateQueriesByPushNotification;
};
