import { StatusBar } from 'expo-status-bar';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

export const Header = () => {
	const { styles } = useStyles(stylesheet);

	return (
		<>
			<StatusBar style='light' />

			<SafeAreaView edges={['top']} style={styles.header}>
				<Text style={styles.title}>Stud Progress</Text>
			</SafeAreaView>
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
