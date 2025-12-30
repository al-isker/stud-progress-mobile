import { useQuery } from '@tanstack/react-query';
import { PROFILE_KEY } from '@/shared/api';
import { profileApi } from './profile-api';

export const useProfileQuery = () => {
	return useQuery({
		queryKey: [PROFILE_KEY],
		queryFn: () => profileApi.get(),
		meta: {
			persist: true
		}
	});
};
