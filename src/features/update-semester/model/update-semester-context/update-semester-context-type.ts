import { RefObject } from 'react';
import { UpdateSemesterBodyType } from '@/entities/profile';
import { ApiErrorType } from '@/shared/api';

export type UpdateSemesterContextFormValuesType =
	Partial<UpdateSemesterBodyType>;
export type UpdateSemesterContextMutationErrorType = ApiErrorType | null;

export type UpdateSemesterContextType = {
	formValuesRef: RefObject<UpdateSemesterContextFormValuesType>;
	mutationErrorRef: RefObject<UpdateSemesterContextMutationErrorType>;
	setFormValues: (values: UpdateSemesterContextFormValuesType) => void;
	setMutationError: (error: UpdateSemesterContextMutationErrorType) => void;
};
