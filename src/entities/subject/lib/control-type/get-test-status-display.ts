import { GradeStatusEnum } from '../../model/subject-grade/grade-status-enum';

const TEST_STATUS_DISPLAY = {
	[GradeStatusEnum.PASS]: 'зачтено',
	[GradeStatusEnum.FAIL]: 'не зачтено',
	[GradeStatusEnum.EMPTY]: null
};

export const getTestStatusDisplay = (status: GradeStatusEnum) => {
	return TEST_STATUS_DISPLAY[status];
};
