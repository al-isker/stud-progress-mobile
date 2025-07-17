import { Attributes, ReactElement, cloneElement } from 'react';
import { SlotProps } from '../types/slot-props';

export const renderSlot = <P extends SlotProps>(
	element?: ReactElement<P>,
	props?: P & Attributes
) => {
	if (!element) return;

	const propStyle = props?.style;
	const elementPropStyle = element.props.style;

	return cloneElement<P>(element, {
		...props,
		...element.props,
		style: [propStyle, elementPropStyle]
	});
};
