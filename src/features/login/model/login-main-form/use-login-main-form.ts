import { useLoginContext } from '../login-context/use-login-context';

export const useLoginMainForm = () => {
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
