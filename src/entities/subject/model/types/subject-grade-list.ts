import { ControlTypeEnum } from './control-type';
import { GradeStatusEnum } from './grade-status';

export type SubjectGradeListType = Array<SubjectGradeListItemType>;

export type SubjectGradeListItemType = {
	id: number;
	name: string;
	controlType: ControlTypeEnum;
	ratingBySemesterList: Array<{
		id: number;
		semester: number;
		averageMark: number | null;
	}>;
	grade: {
		id: number;
		semester: number;
		status: GradeStatusEnum;
		date: string;
		mark: number | null;
		isNew: boolean;
	};
};
