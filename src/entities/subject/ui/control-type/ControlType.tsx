import { Tag, TagProps } from '@/shared/ui/tag';
import { CONTROL_TYPE_DISPLAY } from '../../lib/control-type/control-type-display';
import { ControlTypeEnum } from '../../model/control-type/control-type-enum';

type ControlTypeProps = Omit<TagProps, 'title'> & {
	controlType: ControlTypeEnum;
};

export const ControlType = ({ controlType, ...props }: ControlTypeProps) => (
	<Tag title={CONTROL_TYPE_DISPLAY[controlType]} {...props} />
);
