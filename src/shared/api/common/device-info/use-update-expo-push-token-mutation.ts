import { useMutation } from '@tanstack/react-query';
import { deviceInfoApi } from './device-info-api';
import { UpdateExpoPushTokenBodyType } from './types/update-expo-push-token-body-type';

export const useUpdateExpoPushTokenMutation = () => {
	return useMutation({
		mutationFn: (body: UpdateExpoPushTokenBodyType) =>
			deviceInfoApi.updateExpoPushToken(body)
	});
};
