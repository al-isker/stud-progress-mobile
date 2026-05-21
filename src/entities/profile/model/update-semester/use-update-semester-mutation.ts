import { hashKey, useMutation, useQueryClient } from '@tanstack/react-query';
import { profileApi } from '../../api/profile-api';
import { profileQueryKeys } from '../../api/query-keys/profile-query-keys';
import { ProfileType } from '../profile/profile-type';
import { UpdateSemesterBodyType } from './update-semester-body-type';

export const useUpdateSemesterMutation = () => {
	const queryClient = useQueryClient();

	const handleSuccess = (profile: ProfileType) => {
		queryClient.setQueryData(profileQueryKeys.all, profile);

		queryClient.resetQueries({
			predicate: ({ queryKey }) => {
				return hashKey(queryKey.slice(0, 1)) !== hashKey(profileQueryKeys.all);
			}
		});
	};

	return useMutation({
		mutationFn: (body: UpdateSemesterBodyType) =>
			profileApi.updateSemester(body),
		onSuccess: handleSuccess
	});
};
