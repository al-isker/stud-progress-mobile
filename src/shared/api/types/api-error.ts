import { AxiosError } from 'axios';

export type ApiErrorType = AxiosError<{
	error?: string;
	message: string[] | string;
	statusCode: number;
}>;
