import { queryOptions } from '@tanstack/react-query';
import { mobileAppInfoApi } from '../mobile-app-info-api';
import { mobileAppInfoQueryKeys } from '../query-keys/mobile-app-info-query-keys';

export const getMobileAppInfoQueryOptions = () => {
	return queryOptions({
		queryKey: mobileAppInfoQueryKeys.all,
		queryFn: () => mobileAppInfoApi.get()
	});
};
