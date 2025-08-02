class Routes {
	loginSemesterForm = '/login/semester-form';
	loginMainForm = '/login/main-form';
	loginLoading = '/login/loading';

	updateSemesterForm = '/update-semester/form';
	updateSemesterLoading = '/update-semester/loading';

	subjectRating = '/subject/rating';
	subjectGrade = '/subject/grade';
	subjectStats = '/subject/stats';
	profile = '/profile';

	subjectByIdRating = (id: number) => `subject/${id}/rating`;
	privacyPolicy = '/privacy-policy';
}

export const routes = new Routes();
