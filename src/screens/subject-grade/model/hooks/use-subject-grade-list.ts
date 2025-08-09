import { useSubjectGradeListQuery } from '@/entities/subject';

export const useSubjectGradeList = () => {
	const { data, refetch, isLoading, isRefetching, ...query } =
		useSubjectGradeListQuery();

	const isError = query.isError || data?.length === 0;

	return { data, refetch, isLoading, isError, isRefetching };
};
