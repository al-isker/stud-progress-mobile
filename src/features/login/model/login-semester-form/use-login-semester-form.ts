import { router } from 'expo-router';
import { routes } from '@/shared/config/navigation';
import { useLoginContext } from '../login-context/use-login-context';

export const useLoginSemesterForm = () => {
	const loginContext = useLoginContext();

	const createSemesterPressHandler = (semester: number) => () => {
		loginContext.setFormValues({ semester });

		router.push(routes.loginMainForm);
	};

	return { createSemesterPressHandler };
};
