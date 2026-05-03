import { baseApi } from '../../core/instances/base-api';
import { MobileAppInfoType } from './types/mobile-app-info-type';

class MobileAppInfoApi {
	async get() {
		const response = await baseApi.get<MobileAppInfoType>('mobile-app-info');

		return response.data;
	}
}

export const mobileAppInfoApi = new MobileAppInfoApi();
