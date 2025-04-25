import { AxiosError } from 'axios';

interface IApiErrorResponseData {
	error?: string;
	message: string[] | string;
	statusCode: number;
}

export interface IApiError extends AxiosError<IApiErrorResponseData> {}
