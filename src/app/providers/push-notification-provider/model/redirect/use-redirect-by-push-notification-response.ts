import { NotificationResponse } from 'expo-notifications';
import { router } from 'expo-router';
import { getTargetRouteByPushNotification } from '@/features/open-push-notification';
import { isExist } from '@/shared/lib/checks';

export const useRedirectByPushNotificationResponse = () => {
	const redirectByPushNotificationResponse = (
		notificationResponse: NotificationResponse
	) => {
		const targetRoute = getTargetRouteByPushNotification(
			notificationResponse.notification
		);

		if (isExist(targetRoute)) {
			router.push(targetRoute);
		}
	};

	return redirectByPushNotificationResponse;
};
