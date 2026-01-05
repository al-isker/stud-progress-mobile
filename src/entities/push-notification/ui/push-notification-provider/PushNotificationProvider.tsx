import { ReactNode } from 'react';
import { useExpoPushTokenHandler } from '../../model/hooks/use-expo-push-token-handler';
import { useNotificationResponseHandler } from '../../model/hooks/use-notification-response-handler';

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
