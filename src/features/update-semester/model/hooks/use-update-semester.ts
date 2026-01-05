import { router } from 'expo-router';
import { useUpdateSemesterMutation } from '@/entities/profile';
import { API_LONG_TIMEOUT, ApiErrorType } from '@/shared/api';
import { routes } from '@/shared/config/navigation';
import { useProgressAnimation } from '@/shared/lib/animation';
import { useUpdateSemesterContext } from './use-update-semester-context';

export const useUpdateSemester = () => {
	const updateSemesterContext = useUpdateSemesterContext();

	const updateSemesterMutation = useUpdateSemesterMutation();

	const { progress, animationStart, animationComplete } =
		useProgressAnimation(API_LONG_TIMEOUT);

	const handleSuccess = () => {
		animationComplete();

		router.dismissTo(routes.profile);
	};

	const handleError = (error: ApiErrorType) => {
		updateSemesterContext.setMutationError(error);

		router.back();
	};

	const updateSemester = () => {
		animationStart();

		const formValues = updateSemesterContext.formValuesRef.current;

		const mutationBody = {
			semester: formValues.semester!
		};

		updateSemesterMutation.mutate(mutationBody, {
			onSuccess: handleSuccess,
			onError: handleError
		});
	};

	return { progress, updateSemester };
};
