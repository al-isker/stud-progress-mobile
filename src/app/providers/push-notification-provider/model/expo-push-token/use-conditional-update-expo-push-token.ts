import { STORAGE_KEYS } from '@/shared/config/storage';
import { AsyncJSONStorage } from '@/shared/lib/async-json-storage';
import { useUpdateExpoPushToken } from '@/shared/lib/expo-push-token';

export const useConditionalUpdateExpoPushToken = () => {
	const { updateExpoPushToken } = useUpdateExpoPushToken();

	const conditionalUpdateExpoPushToken = async () => {
		const shouldSendExpoPushToken = await AsyncJSONStorage.getItem<boolean>(
			STORAGE_KEYS.shouldSendExpoPushToken
		);

		if (shouldSendExpoPushToken) {
			updateExpoPushToken();
		}
	};

	return conditionalUpdateExpoPushToken;
};
