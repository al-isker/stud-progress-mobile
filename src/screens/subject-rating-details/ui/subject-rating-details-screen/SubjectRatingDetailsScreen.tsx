import { Text, View } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { CircularLoader } from '@/shared/ui/circular-loader';
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
			<View style={[styles.centringContainer, styles.container]}>
				<Text style={styles.error}>
					Баллы не найдены, может тебя отчислили?
				</Text>
			</View>
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
	},
	error: {
		color: theme.colors.red
	}
}));
