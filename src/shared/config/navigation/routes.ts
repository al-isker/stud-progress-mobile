import { TabNames } from './tab-names';

class Routes {
	loginSemester = '/login/semester';
	loginMain = '/login/main';
	loginLoading = '/login/loading';

	home = '/';
	ratingById = (id: number) => `/rating/${id}`;
	grade = '/' + TabNames.GRADE;
	stats = '/' + TabNames.STATS;
	profile = '/' + TabNames.PROFILE;
}

export const routes = new Routes();
