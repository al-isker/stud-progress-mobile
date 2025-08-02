import { router } from 'expo-router';
import { useUpdateSemesterMutation } from '@/entities/profile';
import { API_LONG_TIMEOUT, ApiErrorType } from '@/shared/api';
import { routes } from '@/shared/config/navigation';
import { useProgressAnimation } from '@/shared/lib/animation';
import { useLockNavigation } from '@/shared/lib/navigation';
import { useUpdateSemesterContext } from './use-update-semester-context';

export const useUpdateSemester = () => {
	const lockNavigation = useLockNavigation();

	const updateSemesterContext = useUpdateSemesterContext();

	const updateSemesterMutation = useUpdateSemesterMutation();

	const { progress, animationStart, animationComplete } =
		useProgressAnimation(API_LONG_TIMEOUT);

	const handleSuccess = () => {
		animationComplete();

		lockNavigation.remove();
		router.dismissTo(routes.profile);
	};

	const handleError = (error: ApiErrorType) => {
		updateSemesterContext.setMutationError(error);

		lockNavigation.remove();
		router.back();
	};

	const updateSemester = () => {
		animationStart();

		const formValues = updateSemesterContext.formValuesRef.current;

		const bodyMutation = {
			semester: formValues.semester!
		};

		updateSemesterMutation.mutate(bodyMutation, {
			onSuccess: handleSuccess,
			onError: handleError
		});
	};

	return { progress, updateSemester };
};
