import { useMutation } from '@tanstack/react-query';
import { UpdateExpoPushTokenBodyType } from '../model/types/update-expo-push-token-body';
import { deviceInfoApi } from './device-info-api';

export const useUpdateExpoPushTokenMutation = () => {
	return useMutation({
		mutationFn: (body: UpdateExpoPushTokenBodyType) =>
			deviceInfoApi.updateExpoPushToken(body)
	});
};
