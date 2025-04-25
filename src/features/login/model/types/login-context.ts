import { MutableRefObject } from 'react';
import { IApiError } from '@/shared/api';
import { ILoginForm } from './login-form';

export type LoginContextFormValues = Partial<ILoginForm>;
export type LoginContextMutationError = IApiError | undefined;

export interface ILoginContext {
	formValuesRef: MutableRefObject<LoginContextFormValues>;
	mutationErrorRef: MutableRefObject<LoginContextMutationError>;
	setFormValues: (values: LoginContextFormValues) => void;
	setMutationError: (error: LoginContextMutationError) => void;
}
