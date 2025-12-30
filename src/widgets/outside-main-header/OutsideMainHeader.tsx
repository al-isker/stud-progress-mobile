import { Text, View, ViewProps } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';

type OutsideMainHeaderProps = ViewProps & {
	safeAreaInsetTop?: number;
	title: string;
};

export const OutsideMainHeader = ({
	style,
	safeAreaInsetTop,
	title,
	...props
}: OutsideMainHeaderProps) => (
	<View style={[styles.container, style]} {...props}>
		<View style={styles.safeAreaContainer(safeAreaInsetTop)}>
			<Text style={styles.appTitle}>Stud Progress</Text>
			<Text style={styles.title}>{title}</Text>
		</View>
	</View>
);

const styles = StyleSheet.create(theme => ({
	container: {
		backgroundColor: theme.colors.bgPaper
	},
	safeAreaContainer: (safeAreaInsetTop = 0) => ({
		height: theme.dimensions.outsideMainHeader.height + safeAreaInsetTop,
		paddingTop: safeAreaInsetTop,
		alignItems: 'center'
	}),
	appTitle: {
		marginVertical: 'auto',
		color: theme.colors.primary,
		fontSize: 28,
		fontFamily: theme.typography.fontFamily.GolosTextBold
	},
	title: {
		marginBottom: theme.spacing,
		color: theme.colors.blackAlpha(0.9),
		fontSize: 24,
		fontFamily: theme.typography.fontFamily.GolosTextSemiBold
	}
}));
