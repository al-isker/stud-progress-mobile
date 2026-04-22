import { useMutation } from '@tanstack/react-query';
import { UpdateExpoPushTokenBodyType } from '../model/expo-push-token/update-expo-push-token-body-type';
import { deviceInfoApi } from './device-info-api';

export const useUpdateExpoPushTokenMutation = () => {
	return useMutation({
		mutationFn: (body: UpdateExpoPushTokenBodyType) =>
			deviceInfoApi.updateExpoPushToken(body)
	});
};
