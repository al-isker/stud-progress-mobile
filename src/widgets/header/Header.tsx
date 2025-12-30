import { Text, View } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';

type HeaderProps = {
	safeAreaInsetTop?: number;
};

export const Header = ({ safeAreaInsetTop }: HeaderProps) => (
	<View style={styles.header(safeAreaInsetTop)}>
		<Text style={styles.title}>Stud Progress</Text>
	</View>
);

const styles = StyleSheet.create(theme => ({
	header: (safeAreaInsetTop = 0) => ({
		zIndex: theme.zIndex.header,
		height: theme.dimensions.header.height + safeAreaInsetTop,
		paddingTop: theme.spacing + safeAreaInsetTop,
		paddingBottom: theme.spacing,
		paddingHorizontal: theme.spacing,
		justifyContent: 'center',
		elevation: 8,
		backgroundColor: theme.colors.primary
	}),
	title: {
		color: theme.colors.alwaysWhite,
		fontSize: 26,
		fontFamily: theme.typography.fontFamily.GolosTextBold
	}
}));
