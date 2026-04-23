import { ControlTypeEnum } from '../control-type/control-type-enum';
import { EventStatusEnum } from './event-status-enum';

export type SubjectRatingDetailType = {
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
