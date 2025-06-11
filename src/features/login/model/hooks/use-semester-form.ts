import { router } from 'expo-router';
import { routes } from '@/shared/config/navigation';
import { useLoginContext } from './use-login-context';

export const useSemesterForm = () => {
	const loginContext = useLoginContext();

	const selectSemester = (value: number) => {
		loginContext.setFormValues({ semester: value });

		router.push(routes.loginMain);
	};

	return { selectSemester };
};
