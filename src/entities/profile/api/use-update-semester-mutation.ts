import { useMutation, useQueryClient } from '@tanstack/react-query';
import { PROFILE_KEY } from '@/shared/api';
import { ProfileType } from '../model/types/profile';
import { UpdateSemesterBodyType } from '../model/types/update-semester-body';
import { profileApi } from './profile-api';

export const useUpdateSemesterMutation = () => {
	const queryClient = useQueryClient();

	const handleSuccess = (data: ProfileType) => {
		queryClient.removeQueries({
			predicate({ queryKey }) {
				return queryKey[0] !== PROFILE_KEY;
			}
		});

		// попробовать изменить только курс и семестр
		queryClient.setQueryData([PROFILE_KEY], data);
	};

	return useMutation({
		mutationFn: (body: UpdateSemesterBodyType) =>
			profileApi.updateSemester(body),
		onSuccess: handleSuccess
	});
};
