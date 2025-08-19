import { View } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { CircularLoader } from '@/shared/ui/circular-loader';
import { ErrorDisplay } from '@/shared/ui/error-display';
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
			<ErrorDisplay
				style={styles.container}
				title='Ошибка'
				text='профиль не найден, попробуй позже или обратись в поддержку'
				onRefresh={refetch}
			/>
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
	}
}));
