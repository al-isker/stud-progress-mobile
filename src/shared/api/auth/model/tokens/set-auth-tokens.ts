import AsyncStorage from '@react-native-async-storage/async-storage';
import {
	ACCESS_TOKEN_STORAGE_KEY,
	REFRESH_TOKEN_STORAGE_KEY
} from '@/shared/config/storage';
import { AuthType } from '../auth/auth-type';

export const setAuthTokens = async (tokens: AuthType) => {
	await AsyncStorage.setItem(ACCESS_TOKEN_STORAGE_KEY, tokens.accessToken);
	await AsyncStorage.setItem(REFRESH_TOKEN_STORAGE_KEY, tokens.refreshToken);
};
