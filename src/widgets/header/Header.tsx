import { Text, View } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

type HeaderProps = {
	safeAreaInsetTop?: number;
};

export const Header = ({ safeAreaInsetTop }: HeaderProps) => {
	const { styles } = useStyles(stylesheet);

	return (
		<View style={styles.header(safeAreaInsetTop)}>
			<Text style={styles.title}>Stud Progress</Text>
		</View>
	);
};

const stylesheet = createStyleSheet(theme => ({
	header: (safeAreaInsetTop?: number) => ({
		zIndex: theme.zIndex.header,
		elevation: 8,
		padding: theme.spacing,
		paddingTop: theme.spacing * 1.5 + (safeAreaInsetTop ?? 0),
		backgroundColor: theme.colors.primary
	}),
	title: {
		color: theme.colors.alwaysWhite,
		fontSize: 26,
		fontFamily: theme.typography.fontFamily.GolosTextBold
	}
}));
