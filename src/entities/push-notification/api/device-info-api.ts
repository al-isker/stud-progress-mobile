import { baseApi } from '@/shared/api';
import { UpdateExpoPushTokenBodyType } from '../model/expo-push-token/update-expo-push-token-body-type';

class DeviceInfoApi {
	async updateExpoPushToken(body: UpdateExpoPushTokenBodyType) {
		const response = await baseApi.post<void>(
			'device-info/expo-push-token',
			body
		);

		return response.data;
	}
}

export const deviceInfoApi = new DeviceInfoApi();
