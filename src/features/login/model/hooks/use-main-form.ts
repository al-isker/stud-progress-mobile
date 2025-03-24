import { useLoginContext } from '../selectors/use-login-context';

export const useMainForm = () => {
	const loginContext = useLoginContext();

	const defaultFullName = loginContext.formValuesRef.current.fullName;
	const defaultPassword = loginContext.formValuesRef.current.password;

	const handleFullNameChange = (value: string) => {
		loginContext.setFormValues({ fullName: value });
	};

	const handlePasswordChange = (value: string) => {
		loginContext.setFormValues({ password: value });
	};

	return {
		defaultFullName,
		defaultPassword,
		handleFullNameChange,
		handlePasswordChange
	};
};
