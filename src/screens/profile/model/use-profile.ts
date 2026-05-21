import { useQuery } from '@tanstack/react-query';
import { getProfileQueryOptions } from '@/entities/profile';

export const useProfile = () => {
	const { data, refetch, isLoading, isSuccess, isRefetching } = useQuery(
		getProfileQueryOptions()
	);

	return { data, refetch, isLoading, isSuccess, isRefetching };
};
