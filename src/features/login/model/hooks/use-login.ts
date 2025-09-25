import { getDevicePushTokenAsync } from 'expo-notifications';
import { router } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LoginResponseType } from '@/entities/auth';
import { useLoginMutation } from '@/entities/auth/api/use-login-mutation';
import { useUpdateFcmToken } from '@/entities/push-notification';
import { API_LONG_TIMEOUT, ApiErrorType } from '@/shared/api';
import { routes } from '@/shared/config/navigation';
import {
	ACCESS_TOKEN_STORAGE_KEY,
	REFRESH_TOKEN_STORAGE_KEY
} from '@/shared/config/storage';
import { useProgressAnimation } from '@/shared/lib/animation';
import { useLockNavigation } from '@/shared/lib/navigation';
import { useLoginContext } from './use-login-context';

export const useLogin = () => {
	const lockNavigation = useLockNavigation();

	const loginContext = useLoginContext();

	const loginMutation = useLoginMutation();

	const { updateFcmToken } = useUpdateFcmToken();

	const { progress, animationStart, animationComplete } =
		useProgressAnimation(API_LONG_TIMEOUT);

	const handleSuccess = async (data: LoginResponseType) => {
		animationComplete();

		await AsyncStorage.setItem(ACCESS_TOKEN_STORAGE_KEY, data.accessToken);
		await AsyncStorage.setItem(REFRESH_TOKEN_STORAGE_KEY, data.refreshToken);

		const pushToken = await getDevicePushTokenAsync();

		updateFcmToken({ fcmToken: pushToken.data });

		lockNavigation.remove();
		router.replace(routes.subjectRating);
	};

	const handleError = (error: ApiErrorType) => {
		loginContext.setMutationError(error);

		lockNavigation.remove();
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
