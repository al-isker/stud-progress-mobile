import { useLocalSearchParams } from 'expo-router';
import { useQueryClient } from '@tanstack/react-query';
import { useSubjectRatingDetailQuery } from '@/entities/subject';
import { SUBJECT_RATING_KEY } from '@/shared/api';

export const useSubjectRatingDetail = () => {
	const localSearchParams = useLocalSearchParams();
	const queryClient = useQueryClient();

	const subjectId = Number(localSearchParams.id);

	const { data, isLoading, isSuccess, isRefetching, ...query } =
		useSubjectRatingDetailQuery(subjectId);

	const refetch = () => {
		queryClient.invalidateQueries({
			predicate: ({ queryKey }) => {
				return queryKey[0] === SUBJECT_RATING_KEY && queryKey[1] !== subjectId;
			}
		});

		return query.refetch();
	};

	return { data, refetch, isLoading, isSuccess, isRefetching };
};
