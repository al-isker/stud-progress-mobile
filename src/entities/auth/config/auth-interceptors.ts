import { api, baseApi } from '@/shared/api';
import { handleRequestFulfilled } from '../model/interceptors/handle-request-fulfilled';
import { handleResponseRejected } from '../model/interceptors/handle-response-rejected';

export const authInterceptors = () => {
	baseApi.interceptors.request.use(handleRequestFulfilled);

	api.interceptors.request.use(handleRequestFulfilled);
	api.interceptors.response.use(undefined, handleResponseRejected);
};
