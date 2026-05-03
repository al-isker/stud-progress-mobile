import { MOBILE_APP_INFO_KEY } from '../../core/query/keys/query-keys';
import { useLazyQuery } from '../../core/query/lib/use-lazy-query';
import { mobileAppInfoApi } from './mobile-app-info-api';

export const useMobileAppInfoLazyQuery = () => {
	return useLazyQuery({
		queryKey: [MOBILE_APP_INFO_KEY],
		queryFn: () => mobileAppInfoApi.get()
	});
};
