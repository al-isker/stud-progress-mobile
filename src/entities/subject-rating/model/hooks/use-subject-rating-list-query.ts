import { useQuery } from '@tanstack/react-query';
import { SUBJECT_RATING_KEY } from '@/shared/api';
import { subjectRatingListFn } from '../../api/get-subject-rating-list-fn';

export const useSubjectRatingListQuery = () => {
	return useQuery({
		queryKey: [SUBJECT_RATING_KEY],
		queryFn: subjectRatingListFn
	});
};
