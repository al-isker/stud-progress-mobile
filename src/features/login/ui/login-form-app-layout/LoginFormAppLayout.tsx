import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Text } from 'react-native';
import { StyleSheet, useUnistyles } from 'react-native-unistyles';
import { ScreenNames } from '@/shared/config/navigation';
import { OutsideMainLayout } from '@/shared/ui/outside-main-layout';

export const LoginFormAppLayout = () => {
	const { rt } = useUnistyles();

	return (
		<>
			<StatusBar style='light' />

			<OutsideMainLayout safeAreaInsets={{ top: rt.insets.top }}>
				<Text style={styles.title}>Вход</Text>

				<Stack
					screenOptions={{
						animation: 'simple_push',
						headerShown: false,
						contentStyle: styles.stackScreenContent
					}}
				>
					<Stack.Screen name={ScreenNames.LOGIN_SEMESTER_FORM} />
					<Stack.Screen name={ScreenNames.LOGIN_MAIN_FORM} />
				</Stack>
			</OutsideMainLayout>
		</>
	);
};

const styles = StyleSheet.create(theme => ({
	title: {
		marginVertical: theme.spacing,
		textAlign: 'center',
		color: theme.colors.blackAlpha(0.9),
		fontSize: 24,
		fontFamily: theme.typography.fontFamily.GolosTextSemiBold
	},
	stackScreenContent: {
		backgroundColor: theme.colors.bgPaper
	}
}));
