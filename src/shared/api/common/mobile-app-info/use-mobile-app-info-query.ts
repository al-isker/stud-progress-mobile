import { useQuery } from '@tanstack/react-query';
import { MOBILE_APP_INFO_KEY } from '../../core/query/keys/query-keys';
import { mobileAppInfoApi } from './mobile-app-info-api';

export const useMobileAppInfoQuery = () => {
	return useQuery({
		queryKey: [MOBILE_APP_INFO_KEY],
		queryFn: () => mobileAppInfoApi.get()
	});
};
