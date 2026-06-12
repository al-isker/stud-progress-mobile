import { createElement } from 'react';
import { RenderSlotType } from '../types/render-slot-type';

export const createSlot = <P extends object>(
	renderSlot?: RenderSlotType<P>,
	props?: P
) => {
	if (!renderSlot) {
		return;
	}

	return createElement(renderSlot, props);
};
