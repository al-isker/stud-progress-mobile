import { ReactNode } from 'react';
import { useExpoPushTokenHandler } from '../../model/expo-push-token/use-expo-push-token-handler';
import { useNotificationResponseHandler } from '../../model/push-notification/use-notification-response-handler';

type PushNotificationProviderProps = {
	children: ReactNode;
};

export const PushNotificationProvider = ({
	children
}: PushNotificationProviderProps) => {
	useExpoPushTokenHandler();
	useNotificationResponseHandler();

	return children;
};
