import { createRGB } from '../../utils/create-rgb';
import { createRGBWithAlpha } from '../../utils/create-rgb-with-alpha';

const primaryChannel = '75, 10, 255';
const blackChannel = '0, 0, 0';
const whiteChannel = '255, 255, 255';
const redChannel = '255, 49, 49';
const greenChannel = '0, 200, 30';

const BASE_COLORS = {
	alwaysBlack: createRGB(blackChannel),
	alwaysWhite: createRGB(whiteChannel),

	alwaysBlackAlpha: createRGBWithAlpha(blackChannel),
	alwaysWhiteAlpha: createRGBWithAlpha(whiteChannel),

	red: createRGB(redChannel),
	green: createRGB(greenChannel),
	redAlpha: createRGBWithAlpha(redChannel),
	greenAlpha: createRGBWithAlpha(greenChannel),

	transparent: 'transparent'
};

export const LIGHT_COLORS = {
	...BASE_COLORS,

	primary: createRGB(primaryChannel),
	primaryAlpha: createRGBWithAlpha(primaryChannel),

	black: createRGB(blackChannel),
	white: createRGB(whiteChannel),
	blackAlpha: createRGBWithAlpha(blackChannel),
	whiteAlpha: createRGBWithAlpha(whiteChannel),

	bgBase: '#F0F0F0',
	bgPaper: '#FFFFFF'
};
