import axios from 'axios';
import { API_CONFIG } from '../../config/api-config';

export const authApi = axios.create(API_CONFIG);
