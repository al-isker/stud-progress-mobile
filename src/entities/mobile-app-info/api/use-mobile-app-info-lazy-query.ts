import { MOBILE_APP_INFO_KEY, useLazyQuery } from '@/shared/api';
import { mobileAppInfoApi } from './mobile-app-info-api';

export const useMobileAppInfoLazyQuery = () => {
	return useLazyQuery({
		queryKey: [MOBILE_APP_INFO_KEY],
		queryFn: () => mobileAppInfoApi.get()
	});
};
