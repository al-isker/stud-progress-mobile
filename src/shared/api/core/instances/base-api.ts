import axios from 'axios';
import { API_CONFIG } from '../config/api-config';

export const baseApi = axios.create(API_CONFIG);
