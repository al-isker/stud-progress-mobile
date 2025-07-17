import { MutableRefObject } from 'react';
import { ApiErrorType, LoginBodyType } from '@/shared/api';

export type LoginContextFormValuesType = Partial<LoginBodyType>;
export type LoginContextMutationErrorType = ApiErrorType | undefined;

export type LoginContextType = {
	formValuesRef: MutableRefObject<LoginContextFormValuesType>;
	mutationErrorRef: MutableRefObject<LoginContextMutationErrorType>;
	setFormValues: (values: LoginContextFormValuesType) => void;
	setMutationError: (error: LoginContextMutationErrorType) => void;
};
