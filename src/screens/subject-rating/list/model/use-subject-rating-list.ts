import { useQueryClient } from '@tanstack/react-query';
import { useSubjectRatingListQuery } from '@/entities/subject';
import { SUBJECT_RATING_KEY } from '@/shared/api';

export const useSubjectRatingList = () => {
	const queryClient = useQueryClient();

	const { data, isLoading, isSuccess, isRefetching, ...query } =
		useSubjectRatingListQuery();

	const isEmptyList = isSuccess && data.length === 0;

	const refetch = () => {
		queryClient.invalidateQueries({
			queryKey: [SUBJECT_RATING_KEY],
			type: 'inactive',
			refetchType: 'none'
		});

		return query.refetch();
	};

	return { data, refetch, isLoading, isEmptyList, isSuccess, isRefetching };
};
