import { ReactNode, useMemo, useRef } from 'react';
import { LoginContext } from '../../model/login-context/login-context';
import {
	LoginContextFormValuesType,
	LoginContextMutationErrorType
} from '../../model/login-context/login-context-type';

type LoginContextProviderProps = {
	children: ReactNode;
};

export const LoginContextProvider = ({
	children
}: LoginContextProviderProps) => {
	const formValuesRef = useRef<LoginContextFormValuesType>({});
	const mutationErrorRef = useRef<LoginContextMutationErrorType>(null);

	const setFormValues = (values: LoginContextFormValuesType) => {
		formValuesRef.current = Object.assign(formValuesRef.current, values);
	};

	const setMutationError = (error: LoginContextMutationErrorType) => {
		mutationErrorRef.current = error;
	};

	const providedValue = useMemo(
		() => ({
			formValuesRef,
			mutationErrorRef,
			setFormValues,
			setMutationError
		}),
		[]
	);

	return (
		<LoginContext.Provider value={providedValue}>
			{children}
		</LoginContext.Provider>
	);
};
