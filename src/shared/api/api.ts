import axios from 'axios';
import { API_CONFIG } from './config/api-config';
import { requestFulfilledInterceptor } from './interceptors/request-fulfilled-interceptor';
import { requestRejectedInterceptor } from './interceptors/request-rejected-interceptor';
import { responseFulfilledInterceptor } from './interceptors/response-fulfilled-interceptor';
import { responseRejectedInterceptor } from './interceptors/response-rejected-interceptor';

export const api = axios.create(API_CONFIG);

api.interceptors.request.use(
	requestFulfilledInterceptor,
	requestRejectedInterceptor
);

api.interceptors.response.use(
	responseFulfilledInterceptor,
	responseRejectedInterceptor
);
