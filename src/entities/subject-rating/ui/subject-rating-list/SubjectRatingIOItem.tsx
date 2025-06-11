import { useRef } from 'react';
import { InView } from 'react-native-intersection-observer';
import { useUnmountEffect } from '@/shared/lib/react-sugar';
import { ISubjectRating } from '../../model/types/subject-rating';
import {
	SubjectRating,
	SubjectRatingRef
} from '../subject-rating/SubjectRating';

type SubjectRatingIOItemProps = {
	data: ISubjectRating;
};

export const SubjectRatingIOItem = ({ data }: SubjectRatingIOItemProps) => {
	const ref = useRef<SubjectRatingRef>(null);
	const isInViewRef = useRef(false);
	const isWasInViewRef = useRef(false);

	const handleInViewChange = (isInView: boolean) => {
		isInViewRef.current = isInView;

		if (isInView) {
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
			<SubjectRating ref={ref} data={data} />
		</InView>
	);
};
