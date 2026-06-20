import { useQuery, useQueryClient } from '@tanstack/react-query';
import {
	getSubjectRatingListQueryOptions,
	subjectQueryKeys
} from '@/entities/subject';

export const useSubjectRatingList = () => {
	const queryClient = useQueryClient();

	const { data, isPending, isPaused, isSuccess, isRefetching, ...query } =
		useQuery(getSubjectRatingListQueryOptions());

	const isEmptyList = isSuccess && data.length === 0;

	const refetch = () => {
		queryClient.invalidateQueries({
			queryKey: subjectQueryKeys.all,
			type: 'inactive',
			refetchType: 'none'
		});

		return query.refetch();
	};

	return {
		data,
		refetch,
		isPending,
		isPaused,
		isEmptyList,
		isSuccess,
		isRefetching
	};
};
