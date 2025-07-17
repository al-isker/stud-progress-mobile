import { useQuery } from '@tanstack/react-query';
import { SUBJECT_RATING_KEY } from '@/shared/api';
import { isExist } from '@/shared/lib/cheсker';
import { subjectApi } from './subject-api';

export const useSubjectRatingDetailsQuery = (subjectId: number) => {
	return useQuery({
		queryKey: [SUBJECT_RATING_KEY, subjectId],
		queryFn: () => subjectApi.getRatingDetails(subjectId),
		enabled: isExist(subjectId)
	});
};
