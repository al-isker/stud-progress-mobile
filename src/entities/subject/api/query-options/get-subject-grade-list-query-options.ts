import { queryOptions } from '@tanstack/react-query';
import { subjectQueryKeys } from '../query-keys/subject-query-keys';
import { subjectApi } from '../subject-api';

export const getSubjectGradeListQueryOptions = () => {
	return queryOptions({
		queryKey: subjectQueryKeys.gradeList(),
		queryFn: () => subjectApi.getGradeList()
	});
};
