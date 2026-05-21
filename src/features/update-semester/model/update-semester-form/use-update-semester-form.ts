import { router } from 'expo-router';
import { useQuery } from '@tanstack/react-query';
import { getProfileQueryOptions } from '@/entities/profile';
import { routes } from '@/shared/config/navigation';
import { useUpdateSemesterContext } from '../update-semester-context/use-update-semester-context';

export const useUpdateSemesterForm = () => {
	const updateSemesterContext = useUpdateSemesterContext();

	const profileQuery = useQuery(getProfileQueryOptions());

	const currentSemester = profileQuery.data?.semester;

	const createSemesterPressHandler = (semester: number) => () => {
		if (currentSemester !== undefined && semester === currentSemester) {
			return;
		}

		updateSemesterContext.setFormValues({ semester });

		router.push(routes.updateSemesterLoading);
	};

	return { currentSemester, createSemesterPressHandler };
};
