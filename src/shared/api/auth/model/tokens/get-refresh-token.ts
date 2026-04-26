import AsyncStorage from '@react-native-async-storage/async-storage';
import { REFRESH_TOKEN_STORAGE_KEY } from '@/shared/config/storage';

export const getRefreshToken = async () => {
	return await AsyncStorage.getItem(REFRESH_TOKEN_STORAGE_KEY);
};
