import { Stack } from 'expo-router';
import { View } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { LoginFormContent } from './LoginFormContent';
import { LoginFormHeader } from './LoginFormHeader';

export const LoginFormAppLayout = () => {
	const { styles, theme } = useStyles(stylesheet);

	return (
		<>
			<View style={styles.layout}>
				<LoginFormHeader style={styles.header} />

				<LoginFormContent style={styles.content}>
					<Stack
						screenOptions={{
							headerShown: false,
							contentStyle: { backgroundColor: theme.colors.bgPaper }
						}}
					/>
				</LoginFormContent>
			</View>
		</>
	);
};

const stylesheet = createStyleSheet(theme => ({
	layout: {
		flex: 1,
		backgroundColor: theme.colors.primary
	},
	header: {
		flex: 0.3,
		flexShrink: 1
	},
	content: {
		flex: 0.7
	}
}));
