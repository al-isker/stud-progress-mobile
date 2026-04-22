import { useMutation, useQueryClient } from '@tanstack/react-query';
import { PROFILE_KEY } from '@/shared/api';
import { ProfileType } from '../model/profile/profile-type';
import { UpdateSemesterBodyType } from '../model/update-semester/update-semester-body-type';
import { profileApi } from './profile-api';

export const useUpdateSemesterMutation = () => {
	const queryClient = useQueryClient();

	const handleSuccess = (data: ProfileType) => {
		queryClient.setQueryData([PROFILE_KEY], data);

		queryClient.resetQueries({
			predicate: ({ queryKey }) => {
				return queryKey[0] !== PROFILE_KEY;
			}
		});
	};

	return useMutation({
		mutationFn: (body: UpdateSemesterBodyType) =>
			profileApi.updateSemester(body),
		onSuccess: handleSuccess
	});
};
