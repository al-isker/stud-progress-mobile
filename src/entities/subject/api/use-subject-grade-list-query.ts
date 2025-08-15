import { useQuery } from '@tanstack/react-query';
import { SUBJECT_GRADE_KEY } from '@/shared/api';
import { subjectApi } from './subject-api';

export const useSubjectGradeListQuery = () => {
	return useQuery({
		queryKey: [SUBJECT_GRADE_KEY],
		queryFn: () => subjectApi.getGradeList()
	});
};
