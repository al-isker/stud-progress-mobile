import { Stack } from 'expo-router';
import { SCREEN_NAMES } from '@/shared/config/navigation';
import { UpdateSemesterContextProvider } from './UpdateSemesterContextProvider';

export const UpdateSemesterAppLayout = () => (
	<UpdateSemesterContextProvider>
		<Stack
			screenOptions={{
				animation: 'simple_push',
				headerShown: false
			}}
		>
			<Stack.Screen name={SCREEN_NAMES.UPDATE_SEMESTER_FORM} />
			<Stack.Screen name={SCREEN_NAMES.UPDATE_SEMESTER_LOADING} />
		</Stack>
	</UpdateSemesterContextProvider>
);
