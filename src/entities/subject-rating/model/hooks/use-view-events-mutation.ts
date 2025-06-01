import { viewEventsFn } from '../../api/view-events-fn';
import { IEventList } from '../types/event';

export const useViewEventsMutation = (
	subjectId: number,
	eventList: IEventList
) => {
	const isThereNewEvents = eventList.some(event => event.isNew);

	const mutate = () => {
		if (isThereNewEvents) {
			viewEventsFn(subjectId);
		}
	};

	return { mutate };
};
