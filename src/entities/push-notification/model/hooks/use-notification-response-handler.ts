import { useEffect } from 'react';
import {
	Notification,
	addNotificationReceivedListener,
	addNotificationResponseReceivedListener,
	getLastNotificationResponse
} from 'expo-notifications';
import { router } from 'expo-router';
import { useQueryClient } from '@tanstack/react-query';
import { SUBJECT_GRADE_KEY, SUBJECT_RATING_KEY } from '@/shared/api';
import { routes } from '@/shared/config/navigation';
import { PushNotificationDataType } from '../types/push-notification-data';
import { PushNotificationTypeEnum } from '../types/push-notification-type';

export const useNotificationResponseHandler = () => {
	const queryClient = useQueryClient();

	const redirectByNotification = (notification: Notification) => {
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

	const invalidateQueriesByNotification = (notification: Notification) => {
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

	useEffect(() => {
		const response = getLastNotificationResponse();

		if (response) {
			setTimeout(() => {
				redirectByNotification(response.notification);
			}, 0);
		}
	}, []);

	useEffect(() => {
		const subscription = addNotificationResponseReceivedListener(response => {
			redirectByNotification(response.notification);
		});

		return subscription.remove;
	}, []);

	useEffect(() => {
		const subscription = addNotificationReceivedListener(notification => {
			invalidateQueriesByNotification(notification);
		});

		return subscription.remove;
	}, []);
};
