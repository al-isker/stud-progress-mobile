import { ControlType } from './control-type';
import { RatingItem } from './rating-item';

export interface ISubjectRating {
	id: number;
	name: string;
	controlType: ControlType;
	semesters: Array<{ number: number }>;
	averageMark: number | null;
	rating: Array<RatingItem>;
}

export type ISubjectRatingList = Array<ISubjectRating>;
