import { useQuery } from '@tanstack/react-query';
import { getSubjectGradeListQueryOptions } from '@/entities/subject';

export const useSubjectGradeList = () => {
	const { data, refetch, isPending, isPaused, isSuccess, isRefetching } =
		useQuery(getSubjectGradeListQueryOptions());

	return { data, refetch, isPending, isPaused, isSuccess, isRefetching };
};
