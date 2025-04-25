import { FlatList, StyleProp, Text, View, ViewStyle } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { CircularLoader } from '@/shared/ui/circular-loader';
import { useSubjectRatingListQuery } from '../../api/use-subject-rating-list-query';
import { SubjectRating } from '../subject-rating/SubjectRating';

type Props = {
	style?: StyleProp<ViewStyle>;
};

export const SubjectRatingList = ({ style }: Props) => {
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
					Оценки не найдены, может вас отчислили?
				</Text>
			</View>
		);
	}

	return (
		<FlatList
			contentContainerStyle={[styles.list, style]}
			showsVerticalScrollIndicator={false}
			data={data}
			keyExtractor={item => item.id.toString()}
			renderItem={({ item }) => <SubjectRating {...item} />}
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
