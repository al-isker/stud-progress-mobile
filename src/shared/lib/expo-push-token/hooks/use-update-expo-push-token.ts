import { getExpoPushTokenAsync } from 'expo-notifications';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useUpdateExpoPushTokenMutation } from '@/shared/api';
import { PROJECT_ID } from '@/shared/config/app';
import { STORAGE_KEYS } from '@/shared/config/storage';
import { AsyncJSONStorage } from '../../async-json-storage';

export const useUpdateExpoPushToken = () => {
	const updateExpoPushTokenMutation = useUpdateExpoPushTokenMutation();

	const handleSuccess = () => {
		AsyncStorage.removeItem(STORAGE_KEYS.shouldSendExpoPushToken);
	};

	const handleError = () => {
		AsyncJSONStorage.setItem(STORAGE_KEYS.shouldSendExpoPushToken, true);
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
