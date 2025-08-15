import { useMutation } from '@tanstack/react-query';
import { UpdateFcmTokenBodyType } from '../model/types/update-device-info-body';
import { deviceInfoApi } from './device-info-api';

export const useUpdateFcmTokenMutation = () => {
	return useMutation({
		mutationFn: (body: UpdateFcmTokenBodyType) =>
			deviceInfoApi.updateFcmToken(body)
	});
};
