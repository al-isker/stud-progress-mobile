import { queryOptions } from '@tanstack/react-query';
import { profileApi } from '../profile-api';
import { profileQueryKeys } from '../query-keys/profile-query-keys';

export const getProfileQueryOptions = () => {
	return queryOptions({
		queryKey: profileQueryKeys.all,
		queryFn: () => profileApi.get(),
		meta: {
			persist: true
		}
	});
};
