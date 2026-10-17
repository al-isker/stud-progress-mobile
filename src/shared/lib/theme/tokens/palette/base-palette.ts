import { createRGB } from '../../color/create-rgb';
import { createRGBWithAlpha } from '../../color/create-rgb-with-alpha';

const blackChannel = '0, 0, 0';
const whiteChannel = '255, 255, 255';
const redChannel = '255, 49, 49';
const greenChannel = '0, 200, 30';

export const BASE_PALETTE = {
	alwaysBlack: createRGB(blackChannel),
	alwaysWhite: createRGB(whiteChannel),

	alwaysBlackAlpha: createRGBWithAlpha(blackChannel),
	alwaysWhiteAlpha: createRGBWithAlpha(whiteChannel),

	red: createRGB(redChannel),
	green: createRGB(greenChannel),
	redAlpha: createRGBWithAlpha(redChannel),
	greenAlpha: createRGBWithAlpha(greenChannel),

	transparent: 'transparent'
} as const;
