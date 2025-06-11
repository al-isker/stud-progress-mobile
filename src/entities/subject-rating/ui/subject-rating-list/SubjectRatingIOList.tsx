import { StyleProp, ViewStyle } from 'react-native';
import { IOScrollView } from 'react-native-intersection-observer';
import { RefreshControl } from '@/shared/ui/refresh-control';
import { ISubjectRatingList } from '../../model/types/subject-rating';
import { SubjectRatingIOItem } from './SubjectRatingIOItem';

type SubjectRatingIOListProps = {
	contentContainerStyle?: StyleProp<ViewStyle>;
	style?: StyleProp<ViewStyle>;
	data: ISubjectRatingList;
	refreshing: boolean;
	onRefresh: () => void;
};

export const SubjectRatingIOList = ({
	contentContainerStyle,
	style,
	data,
	refreshing,
	onRefresh
}: SubjectRatingIOListProps) => {
	return (
		<IOScrollView
			rootMargin={{ top: -50, bottom: -50 }}
			contentContainerStyle={contentContainerStyle}
			style={style}
			showsVerticalScrollIndicator={false}
			refreshControl={
				<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
			}
		>
			{data.map(item => (
				<SubjectRatingIOItem key={item.id} data={item} />
			))}
		</IOScrollView>
	);
};
