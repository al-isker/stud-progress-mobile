import { useLoginContext } from './use-login-context';

export const useSemesterForm = () => {
	const loginContext = useLoginContext();

	const selectSemester = (value: number) => {
		loginContext.setFormValues({ semester: value });
	};

	return { selectSemester };
};
