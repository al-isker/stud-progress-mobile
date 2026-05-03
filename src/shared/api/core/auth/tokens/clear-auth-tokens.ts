import AsyncStorage from '@react-native-async-storage/async-storage';
import {
	ACCESS_TOKEN_STORAGE_KEY,
	REFRESH_TOKEN_STORAGE_KEY
} from '@/shared/config/storage';

export const clearAuthTokens = async () => {
	await AsyncStorage.removeItem(ACCESS_TOKEN_STORAGE_KEY);
	await AsyncStorage.removeItem(REFRESH_TOKEN_STORAGE_KEY);
};
