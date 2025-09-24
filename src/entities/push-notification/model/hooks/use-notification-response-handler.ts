import { useEffect } from 'react';
import {
	addNotificationReceivedListener,
	addNotificationResponseReceivedListener,
	getLastNotificationResponse
} from 'expo-notifications';
import { useInvalidateQueriesOnNotification } from './use-invalidate-queries-on-notification';
import { useRedirectOnNotification } from './use-redirect-on-notification';

export const useNotificationResponseHandler = () => {
	const redirectOnNotification = useRedirectOnNotification();
	const invalidateQueriesOnNotification = useInvalidateQueriesOnNotification();

	useEffect(() => {
		const response = getLastNotificationResponse();

		if (response) {
			redirectOnNotification(response.notification);
		}
	}, []);

	useEffect(() => {
		const subscription = addNotificationResponseReceivedListener(response => {
			redirectOnNotification(response.notification);
		});

		return subscription.remove;
	}, []);

	useEffect(() => {
		const subscription = addNotificationReceivedListener(notification => {
			invalidateQueriesOnNotification(notification);
		});

		return subscription.remove;
	}, []);
};
