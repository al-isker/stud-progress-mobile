import { useRef } from 'react';
import { FlatList, FlatListProps, StyleProp, ViewStyle } from 'react-native';
import { RefreshControl } from '@/shared/ui/refresh-control';
import {
	ISubjectRating,
	ISubjectRatingList
} from '../../model/types/subject-rating';
import {
	SubjectRating,
	SubjectRatingRef
} from '../subject-rating/SubjectRating';

type SubjectRatingFlatListProps = {
	contentContainerStyle?: StyleProp<ViewStyle>;
	style?: StyleProp<ViewStyle>;
	data: ISubjectRatingList;
	refreshing: boolean;
	onRefresh: () => void;
};

export const SubjectRatingFlatList = ({
	contentContainerStyle,
	style,
	data,
	refreshing,
	onRefresh
}: SubjectRatingFlatListProps) => {
	const subjectRatingRefs = Array.from({ length: data.length }, () => {
		return useRef<SubjectRatingRef>(null);
	});

	const handleViewableItemsChanged: FlatListProps<ISubjectRating>['onViewableItemsChanged'] =
		({ changed }) => {
			for (const { index } of changed) {
				if (index !== null) {
					subjectRatingRefs[index].current!.focus();
				}
			}
		};

	return (
		<FlatList
			contentContainerStyle={contentContainerStyle}
			style={style}
			showsVerticalScrollIndicator={false}
			refreshControl={
				<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
			}
			data={data}
			initialNumToRender={data.length}
			viewabilityConfig={{ itemVisiblePercentThreshold: 50 }}
			onViewableItemsChanged={handleViewableItemsChanged}
			keyExtractor={item => item.id.toString()}
			renderItem={({ item, index }) => (
				<SubjectRating
					ref={subjectRatingRefs[index]}
					name={item.name}
					controlType={item.controlType}
					ratingByCurrentSemester={item.ratingByCurrentSemester}
				/>
			)}
		/>
	);
};
