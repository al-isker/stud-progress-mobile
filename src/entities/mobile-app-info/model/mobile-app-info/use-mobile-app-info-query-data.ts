import { useQueryClient } from '@tanstack/react-query';
import { MOBILE_APP_INFO_KEY } from '@/shared/api';
import { MobileAppInfoType } from './mobile-app-info-type';

export const useMobileAppInfoQueryData = () => {
	const queryClient = useQueryClient();

	const mobileAppInfoQueryData = queryClient.getQueryData<MobileAppInfoType>([
		MOBILE_APP_INFO_KEY
	]);

	return mobileAppInfoQueryData;
};
