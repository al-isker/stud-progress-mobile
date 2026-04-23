import { useSubjectGradeListQuery } from '@/entities/subject';

export const useSubjectGradeList = () => {
	const { data, refetch, isLoading, isSuccess, isRefetching } =
		useSubjectGradeListQuery();

	return { data, refetch, isLoading, isSuccess, isRefetching };
};
