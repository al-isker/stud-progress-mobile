import { api } from '@/shared/api';
import { ProfileType } from '../model/profile/profile-type';

class ProfileApi {
	async get() {
		const response = await api.get<ProfileType>('profile');

		return response.data;
	}
}

export const profileApi = new ProfileApi();
