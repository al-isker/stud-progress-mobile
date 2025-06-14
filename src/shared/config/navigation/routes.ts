class Routes {
	loginSemester = '/login/semester';
	loginMain = '/login/main';
	loginLoading = '/login/loading';

	subjectRating = '/subject/rating';
	subjectGrade = '/subject/grade';
	subjectStats = '/subject/stats';
	profile = '/profile';

	subjectByIdRating = (id: number) => `subject/${id}/rating`;
}

export const routes = new Routes();
