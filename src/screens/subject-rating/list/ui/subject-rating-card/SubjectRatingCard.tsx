import { useRef } from 'react';
import { InView } from 'react-native-intersection-observer';
import { SubjectRatingListItemType } from '@/entities/subject';
import { useCleanupEffect } from '@/shared/lib/react-hooks';
import {
	SubjectRatingCardContent,
	SubjectRatingCardContentRef
} from './SubjectRatingCardContent';

type SubjectRatingCardProps = {
	subjectRating: SubjectRatingListItemType;
};

export const SubjectRatingCard = ({
	subjectRating
}: SubjectRatingCardProps) => {
	const ref = useRef<SubjectRatingCardContentRef>(null);
	const isInViewRef = useRef(false);
	const isWasInViewRef = useRef(false);

	const handleInViewChange = (isInView: boolean) => {
		isInViewRef.current = isInView;

		if (isInView && !isWasInViewRef.current) {
			ref.current!.inView();

			isWasInViewRef.current = true;
		}
	};

	useCleanupEffect(() => {
		if (isInViewRef.current) {
			ref.current?.inView();
		} else {
			isWasInViewRef.current = false;
		}
	}, [subjectRating]);

	return (
		<InView onChange={handleInViewChange}>
			<SubjectRatingCardContent ref={ref} subjectRating={subjectRating} />
		</InView>
	);
};
