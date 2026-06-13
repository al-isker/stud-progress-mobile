import { ControlTypeEnum } from '../../model/control-type/control-type-enum';

const CONTROL_TYPE_DISPLAY = {
	[ControlTypeEnum.TEST]: 'Зачёт',
	[ControlTypeEnum.GRADED_TEST]: 'Диф зачёт',
	[ControlTypeEnum.EXAM]: 'Экзамен'
};

export const getControlTypeDisplay = (controlType: ControlTypeEnum) => {
	return CONTROL_TYPE_DISPLAY[controlType];
};
