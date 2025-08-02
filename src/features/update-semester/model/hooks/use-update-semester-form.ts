import { router } from 'expo-router';
import { useProfileQuery } from '@/entities/profile';
import { routes } from '@/shared/config/navigation';
import { useUpdateSemesterContext } from './use-update-semester-context';

export const useUpdateSemesterForm = () => {
	const updateSemesterContext = useUpdateSemesterContext();

	const profileQuery = useProfileQuery();

	const currentSemester = profileQuery.data?.semester;

	const selectSemester = (value: number) => {
		if (currentSemester !== undefined && value === currentSemester) {
			return;
		}

		updateSemesterContext.setFormValues({ semester: value });

		router.push(routes.updateSemesterLoading);
	};

	return { currentSemester, selectSemester };
};
