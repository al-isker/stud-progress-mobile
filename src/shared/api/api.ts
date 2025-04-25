import axios from 'axios';
import { API_URL } from '../config/environments';
import { API_TIMEOUT } from './config/api-timeout';
import { requestFulfilledInterceptor } from './interceptors/request-fulfilled-interceptor';
import { requestRejectedInterceptor } from './interceptors/request-rejected-interceptor';
import { responseFulfilledInterceptor } from './interceptors/response-fulfilled-interceptor';
import { responseRejectedInterceptor } from './interceptors/response-rejected-interceptor';

export const api = axios.create({
	baseURL: API_URL,
	timeout: API_TIMEOUT,
	withCredentials: true,
	headers: { 'Content-Type': 'application/json' }
});

api.interceptors.request.use(
	requestFulfilledInterceptor,
	requestRejectedInterceptor
);

api.interceptors.response.use(
	responseFulfilledInterceptor,
	responseRejectedInterceptor
);
