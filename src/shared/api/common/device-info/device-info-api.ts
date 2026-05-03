import { baseApi } from '../../core/instances/base-api';
import { UpdateExpoPushTokenBodyType } from './types/update-expo-push-token-body-type';

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
