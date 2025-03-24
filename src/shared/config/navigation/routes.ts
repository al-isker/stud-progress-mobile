import { TabNames } from './tab-names';

class Routes {
	loginSemester = '/login/semester';
	loginMain = '/login/main';
	loginLoading = '/login/loading';

	home = '/';
	grade = '/' + TabNames.GRADE;
	stats = '/' + TabNames.STATS;
	profile = '/' + TabNames.PROFILE;
}

export const routes = new Routes();
