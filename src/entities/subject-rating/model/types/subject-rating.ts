import { ControlTypeEnum } from './control-type';
import { IEventList } from './event';

export type ISubjectRatingList = Array<ISubjectRating>;

export interface ISubjectRating {
	id: number;
	name: string;
	controlType: ControlTypeEnum;
	ratingByCurrentSemester: IRatingByCurrentSemester | null;
}

export type IRatingByCurrentSemester = {
	averageMark: number | null;
	eventList: IEventList;
};
