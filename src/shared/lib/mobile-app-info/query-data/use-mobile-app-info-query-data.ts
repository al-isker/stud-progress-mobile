import { useQueryClient } from '@tanstack/react-query';
import { MOBILE_APP_INFO_KEY, MobileAppInfoType } from '@/shared/api';

export const useMobileAppInfoQueryData = () => {
	const queryClient = useQueryClient();

	const mobileAppInfoQueryData = queryClient.getQueryData<MobileAppInfoType>([
		MOBILE_APP_INFO_KEY
	]);

	return mobileAppInfoQueryData;
};
