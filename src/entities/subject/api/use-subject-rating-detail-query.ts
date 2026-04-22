import { useQuery } from '@tanstack/react-query';
import { SUBJECT_RATING_KEY } from '@/shared/api';
import { isExist } from '@/shared/lib/cheсks';
import { subjectApi } from './subject-api';

export const useSubjectRatingDetailQuery = (subjectId: number) => {
	return useQuery({
		queryKey: [SUBJECT_RATING_KEY, subjectId],
		queryFn: () => subjectApi.getRatingDetail(subjectId),
		enabled: isExist(subjectId)
	});
};
