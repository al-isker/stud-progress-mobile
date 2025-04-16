import { FlatList, StyleProp, Text, View, ViewStyle } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { parseErrorResponse } from '@/shared/api';
import { CircularLoader } from '@/shared/ui/circular-loader';
import { useSubjectRatingQuery } from '../../api/use-subject-rating-query';
import { SubjectRating } from '../subject-rating/SubjectRating';

type Props = {
	style?: StyleProp<ViewStyle>;
};

export const SubjectRatingList = ({ style }: Props) => {
	const { styles } = useStyles(stylesheet);

	const { data, error, isLoading, isSuccess, isError } =
		useSubjectRatingQuery();

	if (isLoading) {
		return (
			<View style={[styles.loaderContainer, style]}>
				<CircularLoader />
			</View>
		);
	}

	if (isError) {
		return (
			<View style={style}>
				<Text style={styles.error}>
					{parseErrorResponse(error)?.message ?? 'Unknown error'}
				</Text>
			</View>
		);
	}

	if (isSuccess) {
		return (
			<FlatList
				contentContainerStyle={[styles.list, style]}
				data={data}
				keyExtractor={item => item.id.toString()}
				renderItem={({ item }) => <SubjectRating {...item} />}
			/>
		);
	}
};

const stylesheet = createStyleSheet(theme => ({
	loaderContainer: {
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
