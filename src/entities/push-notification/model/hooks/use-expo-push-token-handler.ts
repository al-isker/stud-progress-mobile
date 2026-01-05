import { useEffect } from 'react';
import { addPushTokenListener } from 'expo-notifications';
import { SHOULD_SENT_EXPO_PUSH_TOKEN_STORAGE_KEY } from '@/shared/config/storage';
import { AsyncJSONStorage } from '@/shared/lib/async-json-storage';
import { useAsyncEffect } from '@/shared/lib/react-sugar';
import { useUpdateExpoPushToken } from './use-update-expo-push-token';

export const useExpoPushTokenHandler = () => {
	const { updateExpoPushToken } = useUpdateExpoPushToken();

	useAsyncEffect(async () => {
		const shouldSentExpoPushToken = await AsyncJSONStorage.getItem<boolean>(
			SHOULD_SENT_EXPO_PUSH_TOKEN_STORAGE_KEY
		);

		if (shouldSentExpoPushToken) {
			updateExpoPushToken();
		}
	}, []);

	useEffect(() => {
		const subscription = addPushTokenListener(() => {
			updateExpoPushToken();
		});

		return subscription.remove;
	}, []);
};
