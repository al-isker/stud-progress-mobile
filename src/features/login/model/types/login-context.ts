import { MutableRefObject } from 'react';
import { ParsedErrorResponse } from '@/shared/api';
import { ILoginForm } from './login-form';

export type LoginContextFormValues = Partial<ILoginForm>;
export type LoginContextErrorMutation = ParsedErrorResponse;

export interface ILoginContext {
	formValuesRef: MutableRefObject<LoginContextFormValues>;
	errorMutationRef: MutableRefObject<LoginContextErrorMutation>;
	setFormValues: (values: LoginContextFormValues) => void;
	setErrorMutation: (error: LoginContextErrorMutation) => void;
}
