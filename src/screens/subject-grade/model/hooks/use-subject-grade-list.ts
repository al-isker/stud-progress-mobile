import { useSubjectGradeListQuery } from '@/entities/subject';

export const useSubjectGradeList = () => {
	const { data, refetch, isLoading, isSuccess, isError, isRefetching } =
		useSubjectGradeListQuery();

	const isEmptyList = isSuccess && data.length === 0;

	return { data, refetch, isLoading, isEmptyList, isError, isRefetching };
};
