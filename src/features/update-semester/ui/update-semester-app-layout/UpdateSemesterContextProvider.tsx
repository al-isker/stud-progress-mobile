import { ReactNode, useMemo, useRef } from 'react';
import { UpdateSemesterContext } from '../../model/context/update-semester-context';
import {
	UpdateSemesterContextFormValuesType,
	UpdateSemesterContextMutationErrorType
} from '../../model/types/update-semester-context';

type UpdateSemesterContextProviderProps = {
	children: ReactNode;
};

export const UpdateSemesterContextProvider = ({
	children
}: UpdateSemesterContextProviderProps) => {
	const formValuesRef = useRef<UpdateSemesterContextFormValuesType>({});
	const mutationErrorRef = useRef<UpdateSemesterContextMutationErrorType>(null);

	const setFormValues = (values: UpdateSemesterContextFormValuesType) => {
		formValuesRef.current = Object.assign(formValuesRef.current, values);
	};

	const setMutationError = (error: UpdateSemesterContextMutationErrorType) => {
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
		<UpdateSemesterContext.Provider value={contextValue}>
			{children}
		</UpdateSemesterContext.Provider>
	);
};
