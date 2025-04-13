import { Dimensions, View } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { Paper } from '@/shared/ui/paper';
import { ProgressChart } from '@/shared/ui/progress-chart';
import { Tag } from '@/shared/ui/tag';
import { Typography } from '@/shared/ui/typography';
import { progressFormatValue } from '../../model/format/progress-format-value';
import { ControlType } from '../../model/types/control-type';
import { ISubjectRating } from '../../model/types/subject-rating';
import { Rating } from './Rating';

type SubjectRatingProps = Pick<
	ISubjectRating,
	'name' | 'controlType' | 'averageMark' | 'rating'
>;

export const SubjectRating = ({
	name,
	controlType,
	averageMark,
	rating
}: SubjectRatingProps) => {
	const { styles } = useStyles(stylesheet);

	const windowWidth = Dimensions.get('window').width;

	const controlTypeDisplay = {
		[ControlType.TEST]: 'зачёт',
		[ControlType.GRADED_TEST]: 'диф зачёт',
		[ControlType.EXAM]: 'экзамен'
	};

	return (
		<Paper style={styles.paper}>
			<ProgressChart
				style={styles.chart}
				diameter={windowWidth / 4}
				value={averageMark ?? 0}
				maxValue={5}
				formatValue={progressFormatValue}
			/>

			<View style={styles.data}>
				<Typography variant='h3' numberOfLines={2}>
					{name}
				</Typography>

				<Tag
					variant='primary'
					size='small'
					style={styles.tag}
					title={controlTypeDisplay[controlType]}
				/>

				<View style={styles.ratingContainer}>
					<Rating style={styles.rating} rating={rating} />
				</View>
			</View>
		</Paper>
	);
};

const stylesheet = createStyleSheet(theme => ({
	paper: {
		flexDirection: 'row',
		columnGap: theme.spacing.container,
		padding: theme.spacing.container
	},
	chart: {
		alignSelf: 'center'
	},
	data: {
		flex: 1,
		rowGap: 6
	},
	tag: {
		alignSelf: 'flex-start'
	},
	ratingContainer: {
		marginTop: 'auto'
	},
	rating: {
		marginTop: 4,
		marginRight: 4
	}
}));
