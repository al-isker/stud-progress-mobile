import { useEffect } from 'react';
import { useLogin } from '@/features/login';
import { ProgressLoader } from '@/shared/ui/progress-loader';

export const LoginProgressLoader = () => {
	const { progress, login } = useLogin();

	useEffect(() => {
		login();
	}, []);

	return <ProgressLoader colorOnPrimary sharedValue={progress} />;
};
