import { useEffect } from 'react';
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { parseErrorResponse } from '@/shared/api';
import { routes } from '@/shared/config/navigation';
import { ACCESS_TOKEN_STORAGE_KEY } from '@/shared/config/storage';
import { useAsyncEffect } from '@/shared/lib/react-sugar';
import { useLoginMutation } from '../../api/use-login-mutation';
import { useLoginContext } from '../selectors/use-login-context';

type LoginEvents = {
	onStart?: () => void;
	onSuccess?: () => void;
	onError?: () => void;
};

export const useLogin = ({ onStart, onSuccess, onError }: LoginEvents = {}) => {
	const router = useRouter();

	const loginContext = useLoginContext();

	const [login, { data, error, isSuccess, isError }] = useLoginMutation();

	useEffect(() => {
		onStart?.();

		const formValues = loginContext.formValuesRef.current;

		login({
			fullName: formValues.fullName ?? '',
			password: formValues.password ?? '',
			semester: formValues.semester!
		});
	}, []);

	useAsyncEffect(async () => {
		if (isSuccess) {
			onSuccess?.();

			await AsyncStorage.setItem(ACCESS_TOKEN_STORAGE_KEY, data.accessToken);

			router.replace(routes.home);
		}
	}, [isSuccess]);

	useEffect(() => {
		if (isError) {
			onError?.();

			const parsedErrorResponse = parseErrorResponse(error);

			loginContext.setErrorMutation(parsedErrorResponse);

			router.back();
		}
	}, [isError]);
};
