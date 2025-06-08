import React, { ReactNode, useMemo, useRef } from 'react';
import { LoginContext } from '../../model/context/login-context';
import {
	LoginContextFormValues,
	LoginContextMutationError
} from '../../model/types/login-context';

export const LoginContextProvider = ({ children }: { children: ReactNode }) => {
	const formValuesRef = useRef<LoginContextFormValues>({});
	const mutationErrorRef = useRef<LoginContextMutationError>();

	const setFormValues = (values: LoginContextFormValues) => {
		formValuesRef.current = Object.assign(formValuesRef.current, values);
	};

	const setMutationError = (error: LoginContextMutationError) => {
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
