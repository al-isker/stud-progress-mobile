import { useQuery } from '@tanstack/react-query';
import { SUBJECT_RATING_KEY } from '@/shared/api';
import { subjectApi } from './subject-api';

export const useSubjectRatingListQuery = () => {
	return useQuery({
		queryKey: [SUBJECT_RATING_KEY],
		queryFn: () => subjectApi.getRatingList()
	});
};
