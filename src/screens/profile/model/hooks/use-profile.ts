import { useProfileQuery } from '@/entities/profile';

export const useProfile = () => {
	const { data, refetch, isLoading, isRefetching, ...query } =
		useProfileQuery();

	const isError = query.isError || !query.isSuccess;

	return { data, refetch, isLoading, isError, isRefetching };
};
