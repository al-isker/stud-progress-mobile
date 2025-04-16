import { api } from '@/shared/api';
import { ISubjectRatingList } from '../model/types/subject-rating';

const subjectRatingApi = api.injectEndpoints({
	overrideExisting: true,
	endpoints: build => ({
		subjectRating: build.query<ISubjectRatingList, void>({
			query: () => 'subject/rating',
			providesTags: ['rating']
		})
	})
});

export const { useSubjectRatingQuery } = subjectRatingApi;
