import { View } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { CircularLoader } from '@/shared/ui/circular-loader';
import { ErrorDisplay } from '@/shared/ui/error-display';
import { useSubjectRatingDetails } from '../../model/hooks/use-subject-rating-details';
import { Content } from '../content/Content';

export const SubjectRatingDetailsScreen = () => {
	const { styles } = useStyles(stylesheet);

	const { data, refetch, isLoading, isError, isRefetching } =
		useSubjectRatingDetails();

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
				text='баллы не найдены, попробуй позже или обратись в поддержку'
				onRefresh={refetch}
			/>
		);
	}

	if (data) {
		return (
			<Content
				contentContainerStyle={styles.container}
				subjectRatingDetails={data}
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
