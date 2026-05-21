import { useQuery } from '@tanstack/react-query';
import { getSubjectGradeListQueryOptions } from '@/entities/subject';

export const useSubjectGradeList = () => {
	const { data, refetch, isLoading, isSuccess, isRefetching } = useQuery(
		getSubjectGradeListQueryOptions()
	);

	return { data, refetch, isLoading, isSuccess, isRefetching };
};
