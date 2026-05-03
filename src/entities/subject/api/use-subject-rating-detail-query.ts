import { useQuery } from '@tanstack/react-query';
import { SUBJECT_RATING_KEY } from '@/shared/api';
import { isDefined } from '@/shared/lib/toolkit';
import { subjectApi } from './subject-api';

export const useSubjectRatingDetailQuery = (subjectId: number) => {
	return useQuery({
		queryKey: [SUBJECT_RATING_KEY, subjectId],
		queryFn: () => subjectApi.getRatingDetail(subjectId),
		enabled: isDefined(subjectId)
	});
};
