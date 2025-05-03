import { StyleProp, Text, View, ViewStyle } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { CircularLoader } from '@/shared/ui/circular-loader';
import { useSubjectRatingListQuery } from '../../api/use-subject-rating-list-query';
import { SubjectRatingFlatList } from './SubjectRatingFlatList';

type SubjectRatingListProps = {
	style?: StyleProp<ViewStyle>;
};

export const SubjectRatingList = ({ style }: SubjectRatingListProps) => {
	const { styles } = useStyles(stylesheet);

	const { data, isPending, isError } = useSubjectRatingListQuery();

	if (isPending) {
		return (
			<View style={[styles.centringContainer, style]}>
				<CircularLoader />
			</View>
		);
	}

	if (isError) {
		return (
			<View style={[styles.centringContainer, style]}>
				<Text style={styles.error}>
					Оценки не найдены, может тебя отчислили?
				</Text>
			</View>
		);
	}

	return (
		<SubjectRatingFlatList
			contentContainerStyle={[styles.list, style]}
			data={data}
		/>
	);
};

const stylesheet = createStyleSheet(theme => ({
	centringContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	error: {
		color: theme.colors.red
	},
	list: {
		rowGap: theme.spacing.container
	}
}));
