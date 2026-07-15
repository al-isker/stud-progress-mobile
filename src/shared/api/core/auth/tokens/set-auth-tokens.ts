import AsyncStorage from '@react-native-async-storage/async-storage';
import { STORAGE_KEYS } from '@/shared/config/storage';
import { AuthType } from '../../../common/auth/types/auth-type';

export const setAuthTokens = async (tokens: AuthType) => {
	await AsyncStorage.setItem(STORAGE_KEYS.accessToken, tokens.accessToken);
	await AsyncStorage.setItem(STORAGE_KEYS.refreshToken, tokens.refreshToken);
};
