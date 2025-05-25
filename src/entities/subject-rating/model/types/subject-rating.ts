import { ControlTypeEnum } from './control-type';
import { IEventList } from './event';

export type ISubjectRatingList = Array<ISubjectRating>;

export interface ISubjectRating {
	id: number;
	name: string;
	controlType: ControlTypeEnum;
	ratingByCurrentSemester: {
		averageMark: number | null;
		eventList: IEventList;
	};
}
