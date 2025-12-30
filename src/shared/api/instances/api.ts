import axios from 'axios';
import { API_CONFIG } from '../config/api-config';

export const api = axios.create(API_CONFIG);
