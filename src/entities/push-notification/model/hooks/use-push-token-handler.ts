import { useEffect } from 'react';
import {
	addPushTokenListener,
	getDevicePushTokenAsync
} from 'expo-notifications';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { WAS_SENT_PUSH_TOKEN_STORAGE_KEY } from '@/shared/config/storage';
import { useAsyncEffect } from '@/shared/lib/react-sugar';
import { useUpdateFcmTokenMutation } from '../../api/use-update-fcm-token-mutation';

export const usePushTokenHandler = () => {
	const updateFcmTokenMutation = useUpdateFcmTokenMutation();

	const handleUpdateFcmTokenSuccess = () => {
		AsyncStorage.setItem(WAS_SENT_PUSH_TOKEN_STORAGE_KEY, String(true));
	};

	const handleUpdateFcmTokenError = () => {
		AsyncStorage.setItem(WAS_SENT_PUSH_TOKEN_STORAGE_KEY, String(false));
	};

	useAsyncEffect(async () => {
		const wasSentPushToken = JSON.parse(
			String(await AsyncStorage.getItem(WAS_SENT_PUSH_TOKEN_STORAGE_KEY))
		);

		if (!wasSentPushToken) {
			const pushToken = await getDevicePushTokenAsync();

			const bodyMutation = { fcmToken: pushToken.data };

			updateFcmTokenMutation.mutate(bodyMutation, {
				onSuccess: handleUpdateFcmTokenSuccess,
				onError: handleUpdateFcmTokenError
			});
		}
	}, []);

	useEffect(() => {
		const subscription = addPushTokenListener(pushToken => {
			const bodyMutation = { fcmToken: pushToken.data };

			updateFcmTokenMutation.mutate(bodyMutation, {
				onSuccess: handleUpdateFcmTokenSuccess,
				onError: handleUpdateFcmTokenError
			});
		});

		return subscription.remove;
	}, []);
};
