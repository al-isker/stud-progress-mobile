import { View } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { CircularLoader } from '@/shared/ui/circular-loader';
import { ErrorDisplay } from '@/shared/ui/error-display';
import { useSubjectGradeList } from '../../model/hooks/use-subject-grade-list';
import { List } from '../list/List';

export const SubjectGradeScreen = () => {
	const { styles } = useStyles(stylesheet);

	const { data, refetch, isLoading, isError, isRefetching } =
		useSubjectGradeList();

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
			<List
				contentContainerStyle={styles.container}
				subjectGradeList={data}
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
