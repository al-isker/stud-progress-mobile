import { useRef } from 'react';
import { InView } from 'react-native-intersection-observer';
import { SubjectRatingListItemType } from '@/entities/subject';
import { useUnmountEffect } from '@/shared/lib/react-sugar';
import { CardContent, CardContentRef } from './CardContent';

type IOCardProps = {
	data: SubjectRatingListItemType;
};

export const IOCard = ({ data }: IOCardProps) => {
	const ref = useRef<CardContentRef>(null);
	const isInViewRef = useRef(false);
	const isWasInViewRef = useRef(false);

	const handleInViewChange = (isInView: boolean) => {
		isInViewRef.current = isInView;

		if (isInView && !isWasInViewRef.current) {
			ref.current!.inView();

			isWasInViewRef.current = true;
		}
	};

	useUnmountEffect(() => {
		if (isInViewRef.current) {
			ref.current?.inView();
		} else {
			isWasInViewRef.current = false;
		}
	}, [data]);

	return (
		<InView onChange={handleInViewChange}>
			<CardContent ref={ref} subjectRating={data} />
		</InView>
	);
};
