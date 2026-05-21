export const subjectQueryKeys = {
	all: ['subject'] as const,
	gradeList: () => [...subjectQueryKeys.all, 'grade', 'list'] as const,
	ratingList: () => [...subjectQueryKeys.all, 'rating', 'list'] as const,
	ratingDetail: (subjectId: number) =>
		[...subjectQueryKeys.all, 'rating', 'detail', subjectId] as const
};
