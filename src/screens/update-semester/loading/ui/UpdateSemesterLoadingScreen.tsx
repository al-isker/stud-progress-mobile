import { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { useUnistyles } from 'react-native-unistyles';
import { useUpdateSemester } from '@/features/update-semester';
import { LoadingScreen } from '@/shared/ui/loading-screen';

export const UpdateSemesterLoadingScreen = () => {
	const { rt } = useUnistyles();

	const { progress, updateSemester } = useUpdateSemester();

	useEffect(() => {
		updateSemester();
	}, []);

	return (
		<>
			<StatusBar style='light' />

			<LoadingScreen
				safeAreaInsets={{
					top: rt.insets.top,
					bottom: rt.insets.bottom
				}}
				description='не выходи с приложения, это займёт около минуты...'
				progress={progress}
			/>
		</>
	);
};
