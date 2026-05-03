import { SHOULD_SEND_EXPO_PUSH_TOKEN_STORAGE_KEY } from '@/shared/config/storage';
import { AsyncJSONStorage } from '@/shared/lib/async-json-storage';
import { useUpdateExpoPushToken } from '@/shared/lib/push-notifications';

export const useConditionalUpdateExpoPushToken = () => {
	const { updateExpoPushToken } = useUpdateExpoPushToken();

	const conditionalUpdateExpoPushToken = async () => {
		const shouldSendExpoPushToken = await AsyncJSONStorage.getItem<boolean>(
			SHOULD_SEND_EXPO_PUSH_TOKEN_STORAGE_KEY
		);

		if (shouldSendExpoPushToken) {
			updateExpoPushToken();
		}
	};

	return conditionalUpdateExpoPushToken;
};
