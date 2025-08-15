import { useEffect } from 'react';
import {
	addNotificationReceivedListener,
	addNotificationResponseReceivedListener,
	getLastNotificationResponseAsync
} from 'expo-notifications';
import { useAsyncEffect } from '@/shared/lib/react-sugar';
import { useInvalidateQueriesOnNotification } from './use-invalidate-queries-on-notification';
import { useRedirectOnNotification } from './use-redirect-on-notification';

export const useNotificationResponseHandler = () => {
	const redirectOnNotification = useRedirectOnNotification();
	const invalidateQueriesOnNotification = useInvalidateQueriesOnNotification();

	useAsyncEffect(async () => {
		const response = await getLastNotificationResponseAsync();

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
