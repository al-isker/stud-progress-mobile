import { Text, View } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { CircularLoader } from '@/shared/ui/circular-loader';
import { useProfile } from '../../model/hooks/use-profile';
import { Content } from '../content/Content';

export const ProfileScreen = () => {
	const { styles } = useStyles(stylesheet);

	const { data, refetch, isLoading, isError, isRefetching } = useProfile();

	if (isLoading) {
		return (
			<View style={[styles.centringContainer, styles.container]}>
				<CircularLoader />
			</View>
		);
	}

	if (isError) {
		return (
			<View style={[styles.centringContainer, styles.container]}>
				<Text style={styles.error}>
					Профиль не найден, может тебя отчислили?
				</Text>
			</View>
		);
	}

	if (data) {
		return (
			<Content
				contentContainerStyle={styles.container}
				profile={data}
				refreshing={isRefetching}
				onRefresh={refetch}
			/>
		);
	}
};

const stylesheet = createStyleSheet(theme => ({
	container: {
		padding: theme.spacing
	},
	centringContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	error: {
		color: theme.colors.red
	}
}));
