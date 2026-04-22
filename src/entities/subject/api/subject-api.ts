import { api } from '@/shared/api';
import { SubjectGradeListType } from '../model/subject-grade/subject-grade-list-type';
import { SubjectRatingDetailType } from '../model/subject-rating/subject-rating-detail-type';
import { SubjectRatingListType } from '../model/subject-rating/subject-rating-list-type';

class SubjectApi {
	async getGradeList() {
		const response = await api.get<SubjectGradeListType>('subject/grade');

		return response.data;
	}

	async getRatingList() {
		const response = await api.get<SubjectRatingListType>('subject/rating');

		return response.data;
	}

	async getRatingDetail(subjectId: number) {
		const response = await api.get<SubjectRatingDetailType>(
			`subject/${subjectId}/rating`
		);

		return response.data;
	}
}

export const subjectApi = new SubjectApi();
