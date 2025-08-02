import { Stack } from 'expo-router';
import { useStyles } from 'react-native-unistyles';
import { ScreenNames } from '@/shared/config/navigation';
import { OutsideMainLayout } from '@/shared/ui/outside-main-layout';
import { Typography } from '@/shared/ui/typography';

export const LoginFormAppLayout = () => {
	const { theme } = useStyles();

	return (
		<OutsideMainLayout>
			<Typography
				variant='h2'
				style={{
					textAlign: 'center',
					marginVertical: theme.spacing
				}}
			>
				Вход
			</Typography>

			<Stack
				screenOptions={{
					headerShown: false,
					contentStyle: { backgroundColor: theme.colors.bgPaper }
				}}
			>
				<Stack.Screen name={ScreenNames.LOGIN_SEMESTER_FORM} />
				<Stack.Screen name={ScreenNames.LOGIN_MAIN_FORM} />
			</Stack>
		</OutsideMainLayout>
	);
};
