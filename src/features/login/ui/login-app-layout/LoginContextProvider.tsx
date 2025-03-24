import React, { ReactNode, useRef } from 'react';
import { LoginContext } from '../../model/context/login-context';
import {
	LoginContextErrorMutation,
	LoginContextFormValues
} from '../../model/types/login-context';

export const LoginContextProvider = ({ children }: { children: ReactNode }) => {
	const formValuesRef = useRef<LoginContextFormValues>({});
	const errorMutationRef = useRef<LoginContextErrorMutation>(null);

	const setFormValues = (values: LoginContextFormValues) => {
		formValuesRef.current = Object.assign(formValuesRef.current, values);
	};

	const setErrorMutation = (error: LoginContextErrorMutation) => {
		errorMutationRef.current = error;
	};

	return (
		<LoginContext.Provider
			value={{
				formValuesRef,
				errorMutationRef,
				setFormValues,
				setErrorMutation
			}}
		>
			{children}
		</LoginContext.Provider>
	);
};
