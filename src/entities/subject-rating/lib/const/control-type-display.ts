import { ControlTypeEnum } from '../../model/types/control-type';

export const CONTROL_TYPE_DISPLAY = {
	[ControlTypeEnum.TEST]: 'зачёт',
	[ControlTypeEnum.GRADED_TEST]: 'диф зачёт',
	[ControlTypeEnum.EXAM]: 'экзамен'
};
