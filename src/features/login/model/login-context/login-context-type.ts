import { RefObject } from 'react';
import { LoginBodyType } from '@/entities/auth';
import { ApiErrorType } from '@/shared/api';

export type LoginContextFormValuesType = Partial<LoginBodyType>;
export type LoginContextMutationErrorType = ApiErrorType | null;

export type LoginContextType = {
	formValuesRef: RefObject<LoginContextFormValuesType>;
	mutationErrorRef: RefObject<LoginContextMutationErrorType>;
	setFormValues: (values: LoginContextFormValuesType) => void;
	setMutationError: (error: LoginContextMutationErrorType) => void;
};
