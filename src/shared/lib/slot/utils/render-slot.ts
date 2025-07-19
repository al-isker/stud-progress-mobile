import { Attributes, ReactElement, cloneElement } from 'react';
import { StyleSheet } from 'react-native';
import { SlotProps } from '../types/slot-props';

export const renderSlot = <P extends SlotProps>(
	element?: ReactElement<P>,
	props?: P & Attributes
) => {
	if (!element) return;

	return cloneElement<P>(element, {
		...props,
		...element.props,
		style: StyleSheet.flatten([props?.style, element.props.style])
	});
};
