import { router } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LoginResponseType } from '@/entities/auth';
import { useLoginMutation } from '@/entities/auth/api/use-login-mutation';
import { API_LONG_TIMEOUT, ApiErrorType } from '@/shared/api';
import { routes } from '@/shared/config/navigation';
import {
	ACCESS_TOKEN_STORAGE_KEY,
	REFRESH_TOKEN_STORAGE_KEY
} from '@/shared/config/storage';
import { useProgressAnimation } from '@/shared/lib/animation';
import { useLoginContext } from './use-login-context';

export const useLogin = () => {
	const loginContext = useLoginContext();

	const loginMutation = useLoginMutation();

	const { progress, animationStart, animationComplete } =
		useProgressAnimation(API_LONG_TIMEOUT);

	const handleSuccess = async (data: LoginResponseType) => {
		animationComplete();

		await AsyncStorage.setItem(ACCESS_TOKEN_STORAGE_KEY, data.accessToken);
		await AsyncStorage.setItem(REFRESH_TOKEN_STORAGE_KEY, data.refreshToken);

		router.replace(routes.subjectRating);
	};

	const handleError = (error: ApiErrorType) => {
		loginContext.setMutationError(error);

		router.back();
	};

	const login = () => {
		animationStart();

		const formValues = loginContext.formValuesRef.current;

		const bodyMutation = {
			fullName: formValues.fullName ?? '',
			password: formValues.password ?? '',
			semester: formValues.semester!
		};

		loginMutation.mutate(bodyMutation, {
			onSuccess: handleSuccess,
			onError: handleError
		});
	};

	return { progress, login };
};
