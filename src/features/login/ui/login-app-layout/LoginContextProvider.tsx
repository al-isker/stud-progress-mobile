import { ReactNode, useMemo, useRef } from 'react';
import { LoginContext } from '../../model/context/login-context';
import {
	LoginContextFormValuesType,
	LoginContextMutationErrorType
} from '../../model/types/login-context';

type Props = {
	children: ReactNode;
};

export const LoginContextProvider = ({ children }: Props) => {
	const formValuesRef = useRef<LoginContextFormValuesType>({});
	const mutationErrorRef = useRef<LoginContextMutationErrorType>(null);

	const setFormValues = (values: LoginContextFormValuesType) => {
		formValuesRef.current = Object.assign(formValuesRef.current, values);
	};

	const setMutationError = (error: LoginContextMutationErrorType) => {
		mutationErrorRef.current = error;
	};

	const contextValue = useMemo(
		() => ({
			formValuesRef,
			mutationErrorRef,
			setFormValues,
			setMutationError
		}),
		[]
	);

	return (
		<LoginContext.Provider value={contextValue}>
			{children}
		</LoginContext.Provider>
	);
};
