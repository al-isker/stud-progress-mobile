import { TabNames } from './tab-names';

class Routes {
	loginMain = () => '/login/main';
	loginSemester = () => '/login/semester';

	home = () => '/';
	grade = () => '/' + TabNames.GRADE;
	stats = () => '/' + TabNames.STATS;
	profile = () => '/' + TabNames.PROFILE;
}

export const routes = new Routes();
