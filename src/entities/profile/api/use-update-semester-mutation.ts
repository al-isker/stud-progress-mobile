import { useMutation, useQueryClient } from '@tanstack/react-query';
import { PROFILE_KEY } from '@/shared/api';
import { UpdateSemesterBodyType } from '../model/types/update-semester-body';
import { UpdateSemesterResponseType } from '../model/types/update-semester-response';
import { profileApi } from './profile-api';

export const useUpdateSemesterMutation = () => {
	const queryClient = useQueryClient();

	const handleSuccess = (data: UpdateSemesterResponseType) => {
		queryClient.setQueryData([PROFILE_KEY], data);

		queryClient.resetQueries({
			predicate({ queryKey }) {
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
