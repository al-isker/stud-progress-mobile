import { View } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { CircularLoader } from '@/shared/ui/circular-loader';
import { ErrorDisplay } from '@/shared/ui/error-display';
import { useSubjectRatingList } from '../../model/hooks/use-subject-rating-list';
import { IOList } from '../io-list/IOList';

export const SubjectRatingScreen = () => {
	const { styles } = useStyles(stylesheet);

	const { data, refetch, isLoading, isError, isRefetching } =
		useSubjectRatingList();

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
			<IOList
				contentContainerStyle={styles.container}
				subjectRatingList={data}
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
