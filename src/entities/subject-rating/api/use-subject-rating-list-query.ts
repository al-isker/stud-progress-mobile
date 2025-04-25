import { useQuery } from '@tanstack/react-query';
import { RATING_KEY, SUBJECT_KEY, api } from '@/shared/api';
import { ISubjectRatingList } from '../model/types/subject-rating';

const subjectRatingListQueryFn = async () => {
	return (await api.get<ISubjectRatingList>('subject/rating')).data;
};

export const useSubjectRatingListQuery = () => {
	return useQuery({
		queryKey: [SUBJECT_KEY, RATING_KEY],
		queryFn: subjectRatingListQueryFn
	});
};
