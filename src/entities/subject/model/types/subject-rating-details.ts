import { ControlTypeEnum } from './control-type';
import { EventStatusEnum } from './event-status';

export type SubjectRatingDetailsType = {
	id: number;
	name: string;
	controlType: ControlTypeEnum;
	ratingByCurrentSemester: {
		averageMark: number | null;
		impactLastMark: number | null;
		studentPercentWithBelowAverageMark: number | null;
		daysWithoutMark: number | null;
		eventList: Array<{
			id: number;
			status: EventStatusEnum;
			date: string;
			mark: number | null;
			isNew: boolean;
		}>;
	};
};
