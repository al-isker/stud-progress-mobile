import { SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { IErrorResponse } from '../types/error-response';

export const parseErrorResponse = (
	error?: FetchBaseQueryError | SerializedError
) => {
	if (error) {
		if ('status' in error) {
			if (typeof error.status === 'number') {
				// handled error from server
				const { message, statusCode } = error.data as IErrorResponse;

				return {
					message: Array.isArray(message) ? message.join(', ') : message,
					status: statusCode
				};
			}

			// handled error from client
			return {
				message: error.error,
				status: error.status
			};
		}

		// serialized error
		return {
			message: error.message ?? 'serialized error',
			status: error.code ?? 'SERIALIZED_ERROR'
		};
	}

	return null;
};
