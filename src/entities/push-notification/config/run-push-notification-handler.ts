import { setNotificationHandler } from 'expo-notifications';

export const runPushNotificationHandler = () => {
	setNotificationHandler({
		handleNotification: async () => ({
			shouldShowAlert: true,
			shouldPlaySound: true,
			shouldSetBadge: true,
			shouldShowBanner: true,
			shouldShowList: true
		})
	});
};
