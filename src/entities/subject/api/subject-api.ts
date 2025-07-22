import { api } from '@/shared/api';
import { SubjectRatingDetailsType } from '../model/types/subject-rating-details';
import { SubjectRatingListType } from '../model/types/subject-rating-list';

class SubjectApi {
	async getRatingList() {
		const response = await api.get<SubjectRatingListType>('subject/rating');

		return response.data;
	}

	async getRatingDetails(subjectId: number) {
		const response = await api.get<SubjectRatingDetailsType>(
			`subject/${subjectId}/rating`
		);

		return response.data;
	}
}

export const subjectApi = new SubjectApi();
