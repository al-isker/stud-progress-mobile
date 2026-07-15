import { ScrollView, StyleProp, ViewStyle } from 'react-native';
import { useUnistyles } from 'react-native-unistyles';
import { SubjectGradeListType } from '@/entities/subject';
import { RefreshControl } from '@/shared/ui/refresh-control';
import { SubjectGradeCard } from '../subject-grade-card/SubjectGradeCard';

type SubjectGradeListProps = {
	contentContainerStyle?: StyleProp<ViewStyle>;
	style?: StyleProp<ViewStyle>;
	subjectGradeList: SubjectGradeListType;
	refreshing: boolean;
	onRefresh: () => void;
};

export const SubjectGradeList = ({
	contentContainerStyle,
	style,
	subjectGradeList,
	refreshing,
	onRefresh
}: SubjectGradeListProps) => {
	const { theme } = useUnistyles();

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
				<SubjectGradeCard key={subjectGrade.id} subjectGrade={subjectGrade} />
			))}
		</ScrollView>
	);
};
