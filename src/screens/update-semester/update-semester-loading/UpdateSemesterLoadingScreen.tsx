import { useEffect } from 'react';
import { useUpdateSemester } from '@/features/update-semester';
import { LoadingScreen } from '@/shared/ui/loading-screen';

export const UpdateSemesterLoadingScreen = () => {
	const { progress, updateSemester } = useUpdateSemester();

	useEffect(() => {
		updateSemester();
	}, []);

	return (
		<LoadingScreen
			caption='загружаем данные, это займёт около минуты...'
			progress={progress}
		/>
	);
};
