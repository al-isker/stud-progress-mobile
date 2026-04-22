import { ReactNode, useMemo, useRef } from 'react';
import { UpdateSemesterContext } from '../../model/update-semester-context/update-semester-context';
import {
	UpdateSemesterContextFormValuesType,
	UpdateSemesterContextMutationErrorType
} from '../../model/update-semester-context/update-semester-context-type';

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
		<UpdateSemesterContext.Provider value={providedValue}>
			{children}
		</UpdateSemesterContext.Provider>
	);
};
