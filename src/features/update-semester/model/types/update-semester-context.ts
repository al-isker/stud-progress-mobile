import { MutableRefObject } from 'react';
import { UpdateSemesterBodyType } from '@/entities/profile';
import { ApiErrorType } from '@/shared/api';

export type UpdateSemesterContextFormValuesType =
	Partial<UpdateSemesterBodyType>;
export type UpdateSemesterContextMutationErrorType = ApiErrorType | undefined;

export type UpdateSemesterContextType = {
	formValuesRef: MutableRefObject<UpdateSemesterContextFormValuesType>;
	mutationErrorRef: MutableRefObject<UpdateSemesterContextMutationErrorType>;
	setFormValues: (values: UpdateSemesterContextFormValuesType) => void;
	setMutationError: (error: UpdateSemesterContextMutationErrorType) => void;
};
