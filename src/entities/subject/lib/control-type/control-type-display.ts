import { ControlTypeEnum } from '../../model/control-type/control-type-enum';

export const CONTROL_TYPE_DISPLAY = {
	[ControlTypeEnum.TEST]: 'зачёт',
	[ControlTypeEnum.GRADED_TEST]: 'диф зачёт',
	[ControlTypeEnum.EXAM]: 'экзамен'
};
