import { queryOptions } from '@tanstack/react-query';
import { subjectQueryKeys } from '../query-keys/subject-query-keys';
import { subjectApi } from '../subject-api';

export const getSubjectRatingListQueryOptions = () => {
	return queryOptions({
		queryKey: subjectQueryKeys.ratingList(),
		queryFn: () => subjectApi.getRatingList()
	});
};
