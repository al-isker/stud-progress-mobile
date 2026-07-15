import AsyncStorage from '@react-native-async-storage/async-storage';
import { STORAGE_KEYS } from '@/shared/config/storage';

export const getAccessToken = async () => {
	return await AsyncStorage.getItem(STORAGE_KEYS.accessToken);
};
