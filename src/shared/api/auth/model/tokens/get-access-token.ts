import AsyncStorage from '@react-native-async-storage/async-storage';
import { ACCESS_TOKEN_STORAGE_KEY } from '@/shared/config/storage';

export const getAccessToken = async () => {
	return await AsyncStorage.getItem(ACCESS_TOKEN_STORAGE_KEY);
};
