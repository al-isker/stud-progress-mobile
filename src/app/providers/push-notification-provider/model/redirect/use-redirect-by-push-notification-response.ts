import { NotificationResponse } from 'expo-notifications';
import { router } from 'expo-router';
import { getTargetRouteByPushNotification } from '@/features/open-push-notification';

export const useRedirectByPushNotificationResponse = () => {
	const redirectByPushNotificationResponse = (
		notificationResponse: NotificationResponse
	) => {
		const targetRoute = getTargetRouteByPushNotification(
			notificationResponse.notification
		);

		if (targetRoute !== null) {
			router.push(targetRoute);
		}
	};

	return redirectByPushNotificationResponse;
};
