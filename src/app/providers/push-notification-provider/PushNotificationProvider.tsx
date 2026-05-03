import { ReactNode, useEffect } from 'react';
import {
	addNotificationReceivedListener,
	addNotificationResponseReceivedListener
} from 'expo-notifications';
import { multiple } from '@/shared/lib/function';
import { useConditionalUpdateExpoPushToken } from './model/expo-push-token/use-conditional-update-expo-push-token';
import { useInvalidateQueriesByPushNotification } from './model/invalidate-queries/use-invalidate-queries-by-push-notification';
import { useRedirectByPushNotificationResponse } from './model/redirect/use-redirect-by-push-notification-response';

type PushNotificationProviderProps = {
	children: ReactNode;
};

export const PushNotificationProvider = ({
	children
}: PushNotificationProviderProps) => {
	const conditionalUpdateExpoPushToken = useConditionalUpdateExpoPushToken();
	const invalidateQueriesByPushNotification =
		useInvalidateQueriesByPushNotification();
	const redirectByPushNotificationResponse =
		useRedirectByPushNotificationResponse();

	useEffect(() => {
		conditionalUpdateExpoPushToken();

		const subscriptionOne = addNotificationReceivedListener(notification => {
			invalidateQueriesByPushNotification(notification);
		});

		const subscriptionTwo = addNotificationResponseReceivedListener(
			notificationResponse => {
				redirectByPushNotificationResponse(notificationResponse);
			}
		);

		return multiple(subscriptionOne.remove, subscriptionTwo.remove);
	}, []);

	return children;
};
