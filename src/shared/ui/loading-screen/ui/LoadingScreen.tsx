import { Ref } from 'react';
import { Insets, Text, View, ViewProps } from 'react-native';
import { SharedValue } from 'react-native-reanimated';
import { StyleSheet } from 'react-native-unistyles';
import { ProgressLoader } from '../../progress-loader';

export type LoadingScreenProps = ViewProps & {
	ref?: Ref<View>;
	safeAreaInsets?: Insets;
	progress: SharedValue<number>;
	description?: string;
};

export const LoadingScreen = ({
	style,
	safeAreaInsets,
	progress,
	description,
	...props
}: LoadingScreenProps) => (
	<View style={[styles.container, style]} {...props}>
		<View style={styles.safeAreaContainer(safeAreaInsets)}>
			<View style={styles.appBanner}>
				<Text style={styles.title}>Stud Progress</Text>
			</View>

			{description && <Text style={styles.description}>{description}</Text>}

			<ProgressLoader colorOnPrimary sharedValue={progress} />
		</View>
	</View>
);

const styles = StyleSheet.create(theme => ({
	container: {
		flex: 1,
		padding: theme.spacing * 2,
		backgroundColor: theme.colors.primary
	},
	safeAreaContainer: (safeAreaInsets?: Insets) => ({
		flex: 1,
		paddingTop: safeAreaInsets?.top,
		paddingRight: safeAreaInsets?.right,
		paddingBottom: safeAreaInsets?.bottom,
		paddingLeft: safeAreaInsets?.left
	}),
	appBanner: {
		width: '100%',
		margin: 'auto',
		justifyContent: 'center',
		alignItems: 'center',
		rowGap: 4
	},
	title: {
		color: theme.colors.alwaysWhite,
		fontSize: 30,
		fontFamily: theme.typography.fontFamily.GolosText,
		fontWeight: 700
	},
	description: {
		marginBottom: 12,
		textAlign: 'center',
		color: theme.colors.alwaysWhite,
		fontSize: 13,
		fontFamily: theme.typography.fontFamily.GolosText,
		fontWeight: 400
	}
}));
