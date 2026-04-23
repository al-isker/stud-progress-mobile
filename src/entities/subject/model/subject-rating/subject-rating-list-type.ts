import { ControlTypeEnum } from '../control-type/control-type-enum';
import { EventStatusEnum } from './event-status-enum';

export type SubjectRatingListType = Array<SubjectRatingListItemType>;

export type SubjectRatingListItemType = {
	id: number;
	name: string;
	controlType: ControlTypeEnum;
	ratingByCurrentSemester: {
		averageMark: number | null;
		eventList: Array<{
			id: number;
			status: EventStatusEnum;
			mark: number | null;
			isNew: boolean;
		}>;
	};
};
