import { MutableRefObject } from 'react';
import { IApiError, ILoginForm } from '@/shared/api';

export type LoginContextFormValues = Partial<ILoginForm>;
export type LoginContextMutationError = IApiError | undefined;

export interface ILoginContext {
	formValuesRef: MutableRefObject<LoginContextFormValues>;
	mutationErrorRef: MutableRefObject<LoginContextMutationError>;
	setFormValues: (values: LoginContextFormValues) => void;
	setMutationError: (error: LoginContextMutationError) => void;
}
