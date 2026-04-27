import { router } from 'expo-router';
import { useQueryClient } from '@tanstack/react-query';
import { useLoginMutation } from '@/entities/auth';
import { useUpdateExpoPushToken } from '@/entities/push-notification';
import {
	API_LONG_TIMEOUT,
	ApiErrorType,
	AuthType,
	setAuthTokens
} from '@/shared/api';
import { routes } from '@/shared/config/navigation';
import { useProgressAnimation } from '@/shared/lib/animation';
import { useLoginContext } from '../login-context/use-login-context';

export const useLogin = () => {
	const queryClient = useQueryClient();

	const loginContext = useLoginContext();

	const loginMutation = useLoginMutation();

	const { updateExpoPushToken } = useUpdateExpoPushToken();

	const { progress, animationStart, animationComplete } =
		useProgressAnimation(API_LONG_TIMEOUT);

	const handleSuccess = async (auth: AuthType) => {
		animationComplete();

		await setAuthTokens(auth);

		queryClient.clear();

		updateExpoPushToken();

		router.replace(routes.subjectRating);
	};

	const handleError = (error: ApiErrorType) => {
		loginContext.setMutationError(error);

		router.back();
	};

	const login = () => {
		animationStart();

		const formValues = loginContext.formValuesRef.current;

		const mutationBody = {
			fullName: formValues.fullName ?? '',
			password: formValues.password ?? '',
			semester: formValues.semester!
		};

		loginMutation.mutate(mutationBody, {
			onSuccess: handleSuccess,
			onError: handleError
		});
	};

	return { progress, login };
};
