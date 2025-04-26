import { CreateAxiosDefaults } from 'axios';
import { API_URL } from '@/shared/config/environments';
import { API_HEADERS } from './api-headers';
import { API_TIMEOUT } from './api-timeout';

export const API_CONFIG: CreateAxiosDefaults = {
	baseURL: API_URL,
	timeout: API_TIMEOUT,
	headers: API_HEADERS,
	withCredentials: true
};
