import AsyncStorage from '@react-native-async-storage/async-storage';
import { SHOULD_SENT_PUSH_TOKEN_STORAGE_KEY } from '@/shared/config/storage';
import { useUpdateFcmTokenMutation } from '../../api/use-update-fcm-token-mutation';
import { UpdateFcmTokenBodyType } from '../types/update-device-info-body';

export const useUpdateFcmToken = () => {
	const updateFcmTokenMutation = useUpdateFcmTokenMutation();

	const handleSuccess = () => {
		AsyncStorage.removeItem(SHOULD_SENT_PUSH_TOKEN_STORAGE_KEY);
	};

	const handleError = () => {
		AsyncStorage.setItem(SHOULD_SENT_PUSH_TOKEN_STORAGE_KEY, String(true));
	};

	const updateFcmToken = (body: UpdateFcmTokenBodyType) => {
		updateFcmTokenMutation.mutate(body, {
			onSuccess: handleSuccess,
			onError: handleError
		});
	};

	return { updateFcmToken };
};
