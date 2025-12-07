import { Ref } from 'react';
import { Text, View, ViewProps } from 'react-native';
import { SharedValue } from 'react-native-reanimated';
import { EdgeInsets } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native-unistyles';
import { ProgressLoader } from '../../progress-loader';

export type LoadingScreenProps = ViewProps & {
	ref?: Ref<View>;
	safeAreaInsets?: Partial<EdgeInsets>;
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
	safeAreaContainer: (safeAreaInsets?: Partial<EdgeInsets>) => ({
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
	appIcon: {
		width: '60%',
		height: 'auto',
		aspectRatio: 1
	},
	title: {
		color: theme.colors.alwaysWhite,
		fontSize: 30,
		fontFamily: theme.typography.fontFamily.GolosTextBold
	},
	description: {
		marginBottom: 12,
		textAlign: 'center',
		color: theme.colors.alwaysWhite,
		fontSize: 13,
		fontFamily: theme.typography.fontFamily.GolosTextRegular
	}
}));
