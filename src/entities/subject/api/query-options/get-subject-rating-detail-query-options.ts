import { queryOptions } from '@tanstack/react-query';
import { isDefined } from '@/shared/lib/toolkit';
import { subjectQueryKeys } from '../query-keys/subject-query-keys';
import { subjectApi } from '../subject-api';

export const getSubjectRatingDetailQueryOptions = (subjectId: number) => {
	return queryOptions({
		queryKey: subjectQueryKeys.ratingDetail(subjectId),
		queryFn: () => subjectApi.getRatingDetail(subjectId),
		enabled: isDefined(subjectId)
	});
};
