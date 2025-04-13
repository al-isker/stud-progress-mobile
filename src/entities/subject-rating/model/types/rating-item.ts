import { RatingStatus } from './rating-status';

export interface RatingItem {
	id: number;
	date: string;
	mark: number | null;
	status: RatingStatus;
	isNew: boolean;
}
