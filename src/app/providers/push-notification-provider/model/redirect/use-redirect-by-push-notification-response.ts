import { NotificationResponse } from 'expo-notifications';
import { router } from 'expo-router';
import { getTargetRouteByPushNotification } from '@/features/open-push-notification';
import { isDefined } from '@/shared/lib/toolkit';

export const useRedirectByPushNotificationResponse = () => {
	const redirectByPushNotificationResponse = (
		notificationResponse: NotificationResponse
	) => {
		const targetRoute = getTargetRouteByPushNotification(
			notificationResponse.notification
		);

		if (isDefined(targetRoute)) {
			router.push(targetRoute);
		}
	};

	return redirectByPushNotificationResponse;
};
