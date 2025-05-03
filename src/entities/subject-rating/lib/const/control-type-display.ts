import { ControlType } from '../../model/types/control-type';

export const CONTROL_TYPE_DISPLAY = {
	[ControlType.TEST]: 'зачёт',
	[ControlType.GRADED_TEST]: 'диф зачёт',
	[ControlType.EXAM]: 'экзамен'
};
