import { useEffect } from 'react';
import { router } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import {
	checkIsSupportedAppVersion,
	useMobileAppInfoQuery
} from '@/entities/mobile-app-info';
import { routes } from '@/shared/config/navigation';

export const RootScreen = () => {
	const mobileAppInfoQuery = useMobileAppInfoQuery();

	useEffect(() => {
		if (mobileAppInfoQuery.isSuccess) {
			const isSupportedAppVersion = checkIsSupportedAppVersion(
				mobileAppInfoQuery.data.minSupportedVersion
			);

			if (isSupportedAppVersion) {
				router.replace(routes.preloadUpdateApp);
			} else {
				router.replace(routes.subjectRating);
			}
		}

		if (mobileAppInfoQuery.isError) {
			router.replace(routes.preloadError);
		}

		if (mobileAppInfoQuery.isSuccess || mobileAppInfoQuery.isError) {
			SplashScreen.hide();
		}
	}, [mobileAppInfoQuery.isSuccess, mobileAppInfoQuery.isError]);

	return null;
};
