import { ReactNode } from 'react';
import { useNotificationResponseHandler } from '../../model/hooks/use-notification-response-handler';
import { usePushTokenHandler } from '../../model/hooks/use-push-token-handler';

type PushNotificationProviderProps = {
	children: ReactNode;
};

export const PushNotificationProvider = ({
	children
}: PushNotificationProviderProps) => {
	usePushTokenHandler();
	useNotificationResponseHandler();

	return children;
};
