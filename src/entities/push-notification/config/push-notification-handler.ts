import { setNotificationHandler } from 'expo-notifications';

export const pushNotificationHandler = () => {
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
