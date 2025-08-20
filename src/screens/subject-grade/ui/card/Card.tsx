import { Text, View } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import {
	ControlType,
	Grade,
	SubjectGradeListItemType
} from '@/entities/subject';
import { Divider } from '@/shared/ui/divider';
import { Paper } from '@/shared/ui/paper';
import { RatingBySemester } from './RatingBySemester';

type CardProps = {
	subjectGrade: SubjectGradeListItemType;
};

export const Card = ({ subjectGrade }: CardProps) => {
	const { name, controlType, ratingBySemesterList, grade } = subjectGrade;

	const { styles } = useStyles(stylesheet);

	return (
		<Paper style={styles.paper}>
			<View style={styles.top}>
				<Text style={styles.name} numberOfLines={1}>
					{name}
				</Text>

				<ControlType
					style={styles.controlType}
					variant='primary'
					size='small'
					controlType={controlType}
				/>
			</View>

			<Divider />

			<View style={styles.bottom}>
				<View style={styles.ratingBySemesterList}>
					{ratingBySemesterList.map(ratingBySemester => (
						<RatingBySemester
							key={ratingBySemester.id}
							semester={ratingBySemester.semester}
							averageMark={ratingBySemester.averageMark}
						/>
					))}
				</View>

				<Grade
					style={styles.grade}
					status={grade.status}
					date={grade.date}
					controlType={controlType}
					mark={grade.mark}
					isNew={grade.isNew}
				/>
			</View>
		</Paper>
	);
};

const stylesheet = createStyleSheet(theme => ({
	paper: {
		rowGap: theme.spacing,
		padding: theme.spacing * 1.25
	},
	top: {
		rowGap: 4
	},
	name: {
		lineHeight: 18,
		color: theme.colors.blackAlpha(0.9),
		fontSize: 18,
		fontFamily: theme.typography.fontFamily.GolosTextSemiBold
	},
	controlType: {
		alignSelf: 'flex-start'
	},
	bottom: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		columnGap: 10
	},
	ratingBySemesterList: {
		flex: 1,
		flexDirection: 'row',
		flexWrap: 'wrap',
		gap: 10
	},
	grade: {
		maxHeight: 74
	}
}));
