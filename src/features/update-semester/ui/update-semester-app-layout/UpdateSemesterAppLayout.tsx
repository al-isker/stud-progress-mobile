import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useStyles } from 'react-native-unistyles';
import { ScreenNames } from '@/shared/config/navigation';
import { UpdateSemesterContextProvider } from './UpdateSemesterContextProvider';

export const UpdateSemesterAppLayout = () => {
	const { theme } = useStyles();

	return (
		<>
			<StatusBar style='light' backgroundColor={theme.colors.primary} />

			<UpdateSemesterContextProvider>
				<Stack screenOptions={{ headerShown: false }}>
					<Stack.Screen name={ScreenNames.UPDATE_SEMESTER_FORM} />
					<Stack.Screen name={ScreenNames.UPDATE_SEMESTER_LOADING} />
				</Stack>
			</UpdateSemesterContextProvider>
		</>
	);
};
