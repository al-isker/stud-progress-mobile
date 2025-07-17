import { API_LONG_TIMEOUT, api } from '@/shared/api';
import { ProfileType } from '../model/types/profile';
import { UpdateSemesterBodyType } from '../model/types/update-semester-body';

class ProfileApi {
	async get() {
		return (await api.get<ProfileType>('profile')).data;
	}

	async updateSemester(body: UpdateSemesterBodyType) {
		return (
			await api.patch<ProfileType>('profile/update-semester', body, {
				timeout: API_LONG_TIMEOUT
			})
		).data;
	}
}

export const profileApi = new ProfileApi();
