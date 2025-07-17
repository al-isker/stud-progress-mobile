import { StyleProp, ViewStyle } from 'react-native';
import { IOScrollView } from 'react-native-intersection-observer';
import { SubjectRatingListType } from '@/entities/subject';
import { RefreshControl } from '@/shared/ui/refresh-control';
import { IOCard } from '../io-card/IOCard';

type IOListProps = {
	contentContainerStyle?: StyleProp<ViewStyle>;
	style?: StyleProp<ViewStyle>;
	subjectRatingList: SubjectRatingListType;
	refreshing: boolean;
	onRefresh: () => void;
};

export const IOList = ({
	contentContainerStyle,
	style,
	subjectRatingList,
	refreshing,
	onRefresh
}: IOListProps) => {
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
			{subjectRatingList.map(item => (
				<IOCard key={item.id} data={item} />
			))}
		</IOScrollView>
	);
};
