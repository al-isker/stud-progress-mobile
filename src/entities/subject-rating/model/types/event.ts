import { EventStatusEnum } from './event-status';

export type IEventList = Array<IEvent>;

export interface IEvent {
	id: number;
	mark: number | null;
	status: EventStatusEnum;
	isNew: boolean;
}
