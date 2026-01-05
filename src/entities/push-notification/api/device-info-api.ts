import { baseApi } from '@/shared/api';
import { UpdateExpoPushTokenBodyType } from '../model/types/update-expo-push-token-body';

class DeviceInfoApi {
	async updateExpoPushToken(body: UpdateExpoPushTokenBodyType) {
		const response = await baseApi.post('device-info/expo-push-token', body);

		return response.data;
	}
}

export const deviceInfoApi = new DeviceInfoApi();
