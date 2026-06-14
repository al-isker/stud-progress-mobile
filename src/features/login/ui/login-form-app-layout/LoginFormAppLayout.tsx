import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { StyleSheet, useUnistyles } from 'react-native-unistyles';
import { ScreenNames } from '@/shared/config/navigation';
import { OutsideMainHeader } from '@/shared/ui/outside-main-header';

export const LoginFormAppLayout = () => {
	const { rt } = useUnistyles();

	return (
		<>
			<StatusBar style='dark' />

			<View style={styles.container}>
				<View style={styles.headerContainer}>
					<OutsideMainHeader safeAreaInsetTop={rt.insets.top} />

					<Text style={styles.title}>Вход</Text>
				</View>

				<Stack
					screenOptions={{
						animation: 'simple_push',
						headerShown: false
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
		flex: 1,
		backgroundColor: theme.colors.bgPaper
	},
	headerContainer: {
		paddingHorizontal: theme.spacing,
		paddingBottom: theme.spacing,
		alignItems: 'center'
	},
	title: {
		color: theme.colors.blackAlpha(0.9),
		fontSize: 24,
		fontFamily: theme.typography.fontFamilies.GolosTextSemiBold
	}
}));
