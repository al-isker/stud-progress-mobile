import { ScrollView, StyleProp, ViewStyle } from 'react-native';
import { useStyles } from 'react-native-unistyles';
import { SubjectGradeListType } from '@/entities/subject';
import { RefreshControl } from '@/shared/ui/refresh-control';
import { Card } from '../card/Card';

type ListProps = {
	contentContainerStyle?: StyleProp<ViewStyle>;
	style?: StyleProp<ViewStyle>;
	subjectGradeList: SubjectGradeListType;
	refreshing: boolean;
	onRefresh: () => void;
};

export const List = ({
	contentContainerStyle,
	style,
	subjectGradeList,
	refreshing,
	onRefresh
}: ListProps) => {
	const { theme } = useStyles();

	return (
		<ScrollView
			style={style}
			contentContainerStyle={[{ rowGap: theme.spacing }, contentContainerStyle]}
			showsVerticalScrollIndicator={false}
			refreshControl={
				<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
			}
		>
			{subjectGradeList.map(subjectGrade => (
				<Card key={subjectGrade.id} subjectGrade={subjectGrade} />
			))}
		</ScrollView>
	);
};
