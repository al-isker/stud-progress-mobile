import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { StyleSheet, useUnistyles } from 'react-native-unistyles';
import { OutsideMainHeader } from '@/widgets/outside-main-header';
import { ScreenNames } from '@/shared/config/navigation';

export const LoginFormAppLayout = () => {
	const { rt } = useUnistyles();

	return (
		<>
			<StatusBar style='dark' />

			<View style={styles.container}>
				<OutsideMainHeader
					style={styles.header}
					safeAreaInsetTop={rt.insets.top}
					title='Вход'
				/>

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
			</View>
		</>
	);
};

const styles = StyleSheet.create(theme => ({
	container: {
		flex: 1
	},
	header: {
		paddingHorizontal: theme.spacing
	},
	stackScreenContent: {
		backgroundColor: theme.colors.bgPaper
	}
}));
