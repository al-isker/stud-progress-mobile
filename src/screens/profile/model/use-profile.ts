import { useQuery } from '@tanstack/react-query';
import { getProfileQueryOptions } from '@/entities/profile';

export const useProfile = () => {
	const { data, refetch, isPending, isPaused, isSuccess, isRefetching } =
		useQuery(getProfileQueryOptions());

	return { data, refetch, isPending, isPaused, isSuccess, isRefetching };
};
