import { ReactNode } from 'react';
import { useNotificationResponseHandler } from '../../model/hooks/use-notification-response-handler';
import { usePushTokenHandler } from '../../model/hooks/use-push-token-handler';

export const PushNotificationProvider = ({
	children
}: {
	children: ReactNode;
}) => {
	usePushTokenHandler();
	useNotificationResponseHandler();

	return children;
};
