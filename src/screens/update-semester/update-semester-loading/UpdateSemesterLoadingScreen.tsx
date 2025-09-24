import { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useUpdateSemester } from '@/features/update-semester';
import { LoadingScreen } from '@/shared/ui/loading-screen';

export const UpdateSemesterLoadingScreen = () => {
	const safeAreaInsets = useSafeAreaInsets();

	const { progress, updateSemester } = useUpdateSemester();

	useEffect(() => {
		updateSemester();
	}, []);

	return (
		<>
			<StatusBar style='light' />

			<LoadingScreen
				safeAreaInsets={{
					top: safeAreaInsets.top,
					bottom: safeAreaInsets.bottom
				}}
				description='не выходи с приложения, это займёт около минуты...'
				progress={progress}
			/>
		</>
	);
};
