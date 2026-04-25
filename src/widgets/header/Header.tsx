import { Text, View, ViewProps } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';

type HeaderProps = ViewProps & {
	safeAreaInsetTop?: number;
};

export const Header = ({ style, safeAreaInsetTop, ...props }: HeaderProps) => (
	<View style={[styles.container, style]} {...props}>
		<View style={{ height: safeAreaInsetTop }} />

		<Text style={styles.title}>Stud Progress</Text>
	</View>
);

const styles = StyleSheet.create(theme => ({
	container: {
		zIndex: theme.zIndex.header,
		paddingVertical: theme.spacing * 1.25,
		paddingHorizontal: theme.spacing,
		backgroundColor: theme.colors.primary,
		boxShadow: `0 2px 8px ${theme.colors.alwaysBlackAlpha(0.075)}`
	},
	title: {
		color: theme.colors.alwaysWhite,
		fontSize: 26,
		fontFamily: theme.typography.fontFamily.GolosText,
		fontWeight: 700
	}
}));
