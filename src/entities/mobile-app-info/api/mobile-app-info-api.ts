import { baseApi } from '@/shared/api';
import { MobileAppInfoType } from '../model/mobile-app-info/mobile-app-info-type';

class MobileAppInfoApi {
	async get() {
		const response = await baseApi.get<MobileAppInfoType>('mobile-app-info');

		return response.data;
	}
}

export const mobileAppInfoApi = new MobileAppInfoApi();
