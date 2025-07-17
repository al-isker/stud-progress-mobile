import { Text, View } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { CircularLoader } from '@/shared/ui/circular-loader';
import { useSubjectRatingList } from '../../model/hooks/use-subject-rating-list';
import { IOList } from '../io-list/IOList';

export const SubjectRatingList = () => {
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
			<View style={[styles.centringContainer, styles.container]}>
				<Text style={styles.error}>
					Баллы не найдены, может тебя отчислили?
				</Text>
			</View>
		);
	}

	if (data) {
		return (
			<IOList
				contentContainerStyle={[styles.list, styles.container]}
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
	},
	error: {
		color: theme.colors.red
	},
	list: {
		rowGap: theme.spacing
	}
}));
