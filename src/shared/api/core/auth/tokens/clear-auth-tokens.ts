import AsyncStorage from '@react-native-async-storage/async-storage';
import { STORAGE_KEYS } from '@/shared/config/storage';

export const clearAuthTokens = async () => {
	await AsyncStorage.removeItem(STORAGE_KEYS.accessToken);
	await AsyncStorage.removeItem(STORAGE_KEYS.refreshToken);
};
