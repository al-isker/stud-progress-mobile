import { createElement } from 'react';
import { RenderSlotType } from './render-slot-type';

export const createSlot = <P extends object>(
	renderSlot?: RenderSlotType<P>,
	props?: P
) => {
	if (!renderSlot) {
		return;
	}

	return createElement(renderSlot, props);
};
