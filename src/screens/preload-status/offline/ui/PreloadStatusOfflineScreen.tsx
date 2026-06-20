import { useEffect } from 'react';
import { getLastNotificationResponse } from 'expo-notifications';
import { router } from 'expo-router';
import { View } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';
import { getTargetRouteByPushNotification } from '@/features/open-push-notification';
import { getMobileAppInfoQueryOptions, useLazyQuery } from '@/shared/api';
import { routes } from '@/shared/config/navigation';
import { checkIsSupportedAppVersion } from '@/shared/lib/app-version';
import { Button } from '@/shared/ui/button';
import { CircularLoader } from '@/shared/ui/circular-loader';
import { StatusScreen } from '@/shared/ui/status-screen';

export const PreloadStatusOfflineScreen = () => {
	const mobileAppInfoLazyQuery = useLazyQuery(getMobileAppInfoQueryOptions());

	useEffect(() => {
		if (mobileAppInfoLazyQuery.isSuccess) {
			const isSupportedAppVersion = checkIsSupportedAppVersion(
				mobileAppInfoLazyQuery.data.minSupportedVersion
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
	}, [mobileAppInfoLazyQuery.isSuccess]);

	return (
		<View style={styles.container}>
			{mobileAppInfoLazyQuery.isPaused ? (
				<StatusScreen
					title='Нет интернета'
					description='проверь подключение к сети'
					actions={
						<Button
							title='попробовать снова'
							onPress={() => mobileAppInfoLazyQuery.fetch()}
						/>
					}
				/>
			) : mobileAppInfoLazyQuery.isPending ? (
				<View style={styles.loaderContainer}>
					<CircularLoader />
				</View>
			) : null}
		</View>
	);
};

const styles = StyleSheet.create((theme, rt) => ({
	container: {
		flex: 1,
		paddingHorizontal: theme.spacing,
		paddingBottom: rt.screen.height / 5 + rt.insets.bottom,
		backgroundColor: theme.colors.bgPaper
	},
	loaderContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
}));
