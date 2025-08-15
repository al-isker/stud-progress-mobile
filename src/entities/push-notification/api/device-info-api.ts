import { api } from '@/shared/api';
import { UpdateFcmTokenBodyType } from '../model/types/update-device-info-body';

class DeviceInfoApi {
	async updateFcmToken(body: UpdateFcmTokenBodyType) {
		const response = await api.post('device-info/fcm-token', body);

		return response.data;
	}
}

export const deviceInfoApi = new DeviceInfoApi();
