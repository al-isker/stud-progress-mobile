import { router } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { routes } from '@/shared/config/navigation';
import {
	ACCESS_TOKEN_STORAGE_KEY,
	REFRESH_TOKEN_STORAGE_KEY
} from '@/shared/config/storage';

export const useLogout = () => {
	const logout = () => {
		AsyncStorage.removeItem(ACCESS_TOKEN_STORAGE_KEY);
		AsyncStorage.removeItem(REFRESH_TOKEN_STORAGE_KEY);

		router.dismissTo(routes.loginSemester);
	};

	return { logout };
};
