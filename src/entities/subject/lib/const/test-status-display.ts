import { GradeStatusEnum } from '../../model/types/grade-status';

export const TEST_STATUS_DISPLAY = {
	[GradeStatusEnum.PASS]: 'зачтено',
	[GradeStatusEnum.FAIL]: 'не зачтено'
};
