import { useLocalSearchParams } from 'expo-router';
import { useQueryClient } from '@tanstack/react-query';
import { useSubjectRatingDetailsQuery } from '@/entities/subject';
import { SUBJECT_RATING_KEY } from '@/shared/api';

export const useSubjectRatingDetails = () => {
	const localSearchParams = useLocalSearchParams();
	const queryClient = useQueryClient();

	const subjectId = Number(localSearchParams.id);

	const { data, isLoading, isRefetching, ...query } =
		useSubjectRatingDetailsQuery(subjectId);

	const isError = query.isError || !query.isSuccess;

	const refetch = () => {
		queryClient.invalidateQueries({
			predicate({ queryKey }) {
				return queryKey[0] === SUBJECT_RATING_KEY && queryKey[1] !== subjectId;
			}
		});

		return query.refetch();
	};

	return { data, refetch, isLoading, isError, isRefetching };
};
