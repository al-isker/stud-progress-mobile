import { useEffect } from 'react';
import { getLastNotificationResponse } from 'expo-notifications';
import { router } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { getTargetRouteByPushNotification } from '@/features/open-push-notification';
import { useMobileAppInfoQuery } from '@/shared/api';
import { routes } from '@/shared/config/navigation';
import { checkIsSupportedAppVersion } from '@/shared/lib/app-version';

export const RootScreen = () => {
	const mobileAppInfoQuery = useMobileAppInfoQuery();

	useEffect(() => {
		if (mobileAppInfoQuery.isSuccess) {
			const isSupportedAppVersion = checkIsSupportedAppVersion(
				mobileAppInfoQuery.data.minSupportedVersion
			);

			if (isSupportedAppVersion) {
				const notificationResponse = getLastNotificationResponse();

				const targetRoute = notificationResponse
					? getTargetRouteByPushNotification(notificationResponse.notification)
					: undefined;

				router.replace(targetRoute ?? routes.subjectRating);
			} else {
				router.replace(routes.preloadUpdateApp);
			}
		}

		if (mobileAppInfoQuery.isError) {
			router.replace(routes.preloadError);
		}

		if (mobileAppInfoQuery.isSuccess || mobileAppInfoQuery.isError) {
			SplashScreen.hideAsync();
		}
	}, [mobileAppInfoQuery.isSuccess, mobileAppInfoQuery.isError]);

	return null;
};
