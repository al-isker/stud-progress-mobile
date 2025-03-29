import { useEffect } from 'react';
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { parseErrorResponse } from '@/shared/api';
import { routes } from '@/shared/config/navigation';
import { ACCESS_TOKEN_STORAGE_KEY } from '@/shared/config/storage';
import { useProgressAnimation } from '@/shared/lib/animations';
import { useAsyncEffect } from '@/shared/lib/react-sugar';
import { useLoginMutation } from '../../api/use-login-mutation';
import { useLoginContext } from '../selectors/use-login-context';

export const useLogin = () => {
	const router = useRouter();

	const loginContext = useLoginContext();

	const [login, { data, error, isSuccess, isError }] = useLoginMutation();

	const { progress, animationStart, animationComplete } =
		useProgressAnimation();

	useEffect(() => {
		animationStart();

		const formValues = loginContext.formValuesRef.current;

		login({
			fullName: formValues.fullName ?? '',
			password: formValues.password ?? '',
			semester: formValues.semester!
		});
	}, []);

	useAsyncEffect(async () => {
		if (isSuccess) {
			animationComplete();

			await AsyncStorage.setItem(ACCESS_TOKEN_STORAGE_KEY, data.accessToken);

			router.replace(routes.home);
		}
	}, [isSuccess]);

	useEffect(() => {
		if (isError) {
			const parsedErrorResponse = parseErrorResponse(error);

			loginContext.setErrorMutation(parsedErrorResponse);

			router.back();
		}
	}, [isError]);

	return { progress };
};
