import { API_LONG_TIMEOUT, api } from '@/shared/api';
import { ProfileType } from '../model/types/profile';
import { UpdateSemesterBodyType } from '../model/types/update-semester-body';

class ProfileApi {
	async get() {
		const response = await api.get<ProfileType>('profile');

		return response.data;
	}

	async updateSemester(body: UpdateSemesterBodyType) {
		const response = await api.patch<ProfileType>(
			'profile/update-semester',
			body,
			{ timeout: API_LONG_TIMEOUT }
		);

		return response.data;
	}
}

export const profileApi = new ProfileApi();
