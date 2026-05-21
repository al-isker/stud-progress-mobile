import { useLocalSearchParams } from 'expo-router';
import { hashKey, useQuery, useQueryClient } from '@tanstack/react-query';
import {
	getSubjectRatingDetailQueryOptions,
	subjectQueryKeys
} from '@/entities/subject';

export const useSubjectRatingDetail = () => {
	const localSearchParams = useLocalSearchParams();
	const queryClient = useQueryClient();

	const subjectId = Number(localSearchParams.id);

	const { data, isLoading, isSuccess, isRefetching, ...query } = useQuery(
		getSubjectRatingDetailQueryOptions(subjectId)
	);

	const refetch = () => {
		queryClient.invalidateQueries({
			predicate: ({ queryKey }) => {
				return (
					hashKey(queryKey.slice(0, 1)) === hashKey(subjectQueryKeys.all) &&
					hashKey(queryKey) !==
						hashKey(subjectQueryKeys.ratingDetail(subjectId))
				);
			}
		});

		return query.refetch();
	};

	return { data, refetch, isLoading, isSuccess, isRefetching };
};
