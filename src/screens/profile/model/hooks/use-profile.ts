import { useProfileQuery } from '@/entities/profile';

export const useProfile = () => {
	const { data, refetch, isLoading, isSuccess, isRefetching, ...query } =
		useProfileQuery();

	return { data, refetch, isLoading, isSuccess, isRefetching };
};
