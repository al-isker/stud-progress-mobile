import { api } from '@/shared/api';
import { SubjectRatingDetailsType } from '../model/types/subject-by-id-rating';
import { SubjectRatingListType } from '../model/types/subject-rating-list';

class SubjectApi {
	async getRatingList() {
		return (await api.get<SubjectRatingListType>('subject/rating')).data;
	}

	async getRatingDetails(subjectId: number) {
		return (
			await api.get<SubjectRatingDetailsType>(`subject/${subjectId}/rating`)
		).data;
	}
}

export const subjectApi = new SubjectApi();
