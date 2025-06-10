class Routes {
	loginSemester = '/login/semester';
	loginMain = '/login/main';
	loginLoading = '/login/loading';

	home = '/';
	ratingById = (id: number) => `/rating/${id}`;
	grade = '/grade';
	stats = '/stats';
	profile = '/profile';
}

export const routes = new Routes();
