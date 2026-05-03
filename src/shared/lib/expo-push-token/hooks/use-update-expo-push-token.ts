import { getExpoPushTokenAsync } from 'expo-notifications';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useUpdateExpoPushTokenMutation } from '@/shared/api';
import { PROJECT_ID } from '@/shared/config/app';
import { SHOULD_SEND_EXPO_PUSH_TOKEN_STORAGE_KEY } from '@/shared/config/storage';
import { AsyncJSONStorage } from '../../async-json-storage';

export const useUpdateExpoPushToken = () => {
	const updateExpoPushTokenMutation = useUpdateExpoPushTokenMutation();

	const handleSuccess = () => {
		AsyncStorage.removeItem(SHOULD_SEND_EXPO_PUSH_TOKEN_STORAGE_KEY);
	};

	const handleError = () => {
		AsyncJSONStorage.setItem(SHOULD_SEND_EXPO_PUSH_TOKEN_STORAGE_KEY, true);
	};

	const updateExpoPushToken = async () => {
		const { data } = await getExpoPushTokenAsync({
			projectId: PROJECT_ID
		});

		const mutationBody = {
			expoPushToken: data
		};

		updateExpoPushTokenMutation.mutate(mutationBody, {
			onSuccess: handleSuccess,
			onError: handleError
		});
	};

	return { updateExpoPushToken };
};
