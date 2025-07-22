import { runAuthInterceptors } from '@/entities/auth';
import { runDayjsLocalization } from '../../config/dayjs/run-dayjs-localization';

export const runAppConfig = () => {
	runAuthInterceptors();
	runDayjsLocalization();
};
