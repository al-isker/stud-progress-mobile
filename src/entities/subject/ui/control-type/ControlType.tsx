import { Tag, TagProps } from '@/shared/ui/tag';
import { getControlTypeDisplay } from '../../lib/control-type/get-control-type-display';
import { ControlTypeEnum } from '../../model/control-type/control-type-enum';

type ControlTypeProps = Omit<TagProps, 'title'> & {
	controlType: ControlTypeEnum;
};

export const ControlType = ({ controlType, ...props }: ControlTypeProps) => (
	<Tag title={getControlTypeDisplay(controlType)} {...props} />
);
