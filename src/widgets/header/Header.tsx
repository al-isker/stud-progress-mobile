import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

export const Header = () => {
	const { styles, theme } = useStyles(stylesheet);

	return (
		<>
			<StatusBar style='light' backgroundColor={theme.colors.primary} />

			<View style={styles.header}>
				<Text style={styles.title}>Stud Progress</Text>
			</View>
		</>
	);
};

const stylesheet = createStyleSheet(theme => ({
	header: {
		zIndex: theme.zIndex.header,
		elevation: 8,
		padding: theme.spacing,
		paddingTop: theme.spacing * 1.5,
		backgroundColor: theme.colors.primary
	},
	title: {
		color: theme.colors.alwaysWhite,
		fontSize: 26,
		fontFamily: theme.typography.fontFamily.GolosTextBold
	}
}));
