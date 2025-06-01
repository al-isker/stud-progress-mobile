import { api } from '@/shared/api';
import { ISubjectRatingList } from '../model/types/subject-rating';

export const subjectRatingListFn = async () => {
	return (await api.get<ISubjectRatingList>('subject/rating')).data;
};
