import { Stack } from 'expo-router';
import { ScreenNames } from '@/shared/config/navigation';
import { UpdateSemesterContextProvider } from './UpdateSemesterContextProvider';

export const UpdateSemesterAppLayout = () => (
	<UpdateSemesterContextProvider>
		<Stack
			screenOptions={{
				animation: 'simple_push',
				headerShown: false
			}}
		>
			<Stack.Screen name={ScreenNames.UPDATE_SEMESTER_FORM} />
			<Stack.Screen name={ScreenNames.UPDATE_SEMESTER_LOADING} />
		</Stack>
	</UpdateSemesterContextProvider>
);
