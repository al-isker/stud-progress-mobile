import { api, baseApi } from '@/shared/api';
import { handleRequestFulfilled } from '../model/session/handle-request-fulfilled';
import { handleResponseRejected } from '../model/session/handle-response-rejected';

export const authInterceptors = () => {
	baseApi.interceptors.request.use(handleRequestFulfilled);

	api.interceptors.request.use(handleRequestFulfilled);
	api.interceptors.response.use(undefined, handleResponseRejected);
};
