import { Text, View, ViewProps } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';

type OutsideMainHeaderProps = ViewProps & {
	safeAreaInsetTop?: number;
};

export const OutsideMainHeader = ({
	style,
	safeAreaInsetTop,
	...props
}: OutsideMainHeaderProps) => (
	<View style={[styles.container, style]} {...props}>
		<View style={styles.safeAreaContainer(safeAreaInsetTop)}>
			<Text style={styles.title}>Stud Progress</Text>
		</View>
	</View>
);

const styles = StyleSheet.create((theme, rt) => ({
	container: {
		backgroundColor: theme.colors.bgPaper
	},
	safeAreaContainer: (safeAreaInsetTop = 0) => ({
		height: rt.screen.height / 5 + safeAreaInsetTop,
		paddingTop: safeAreaInsetTop,
		justifyContent: 'center',
		alignItems: 'center'
	}),
	title: {
		color: theme.colors.primary,
		fontSize: 28,
		fontFamily: theme.typography.fontFamily.GolosText,
		fontWeight: 700
	}
}));
