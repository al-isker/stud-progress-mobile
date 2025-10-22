import { useEffect } from 'react';
import {
	addPushTokenListener,
	getDevicePushTokenAsync
} from 'expo-notifications';
import { SHOULD_SENT_PUSH_TOKEN_STORAGE_KEY } from '@/shared/config/storage';
import { AsyncJSONStorage } from '@/shared/lib/async-json-storage';
import { useAsyncEffect } from '@/shared/lib/react-sugar';
import { useUpdateFcmToken } from './use-update-fcm-token';

export const usePushTokenHandler = () => {
	const { updateFcmToken } = useUpdateFcmToken();

	useAsyncEffect(async () => {
		const shouldSentPushToken = await AsyncJSONStorage.getItem<boolean>(
			SHOULD_SENT_PUSH_TOKEN_STORAGE_KEY
		);

		if (shouldSentPushToken) {
			const pushToken = await getDevicePushTokenAsync();

			updateFcmToken({ fcmToken: pushToken.data });
		}
	}, []);

	useEffect(() => {
		const subscription = addPushTokenListener(pushToken => {
			updateFcmToken({ fcmToken: pushToken.data });
		});

		return subscription.remove;
	}, []);
};
