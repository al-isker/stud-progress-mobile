import { api } from '../../instances/api';
import { baseApi } from '../../instances/base-api';
import { createRequestFulfilledHandler } from '../model/interceptors/create-request-fulfilled-handler';
import { createResponseRejectedHandler } from '../model/interceptors/create-response-rejected-handler';

type AuthInterceptorsConfigureOptionsType = {
	onUnauthorized?: () => void;
};

export const authInterceptorsConfigure = (
	options: AuthInterceptorsConfigureOptionsType
) => {
	const requestFulfilledHandler = createRequestFulfilledHandler();
	const responseRejectedHandler = createResponseRejectedHandler(options);

	baseApi.interceptors.request.use(requestFulfilledHandler);

	api.interceptors.request.use(requestFulfilledHandler);
	api.interceptors.response.use(undefined, responseRejectedHandler);
};
