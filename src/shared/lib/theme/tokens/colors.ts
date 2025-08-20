import { makeRGB } from '../utils/make-rgb';
import { makeRGBWithAlpha } from '../utils/make-rgb-with-alpha';

const primaryChannel = '75, 10, 255';
const blackChannel = '0, 0, 0';
const whiteChannel = '255, 255, 255';
const redChannel = '255, 49, 49';
const greenChannel = '0, 200, 30';

const BASE_COLORS = {
	alwaysBlack: makeRGB(blackChannel),
	alwaysWhite: makeRGB(whiteChannel),

	alwaysBlackAlpha: makeRGBWithAlpha(blackChannel),
	alwaysWhiteAlpha: makeRGBWithAlpha(whiteChannel),

	red: makeRGB(redChannel),
	green: makeRGB(greenChannel),
	redAlpha: makeRGBWithAlpha(redChannel),
	greenAlpha: makeRGBWithAlpha(greenChannel),

	transparent: 'transparent'
};

export const LIGHT_COLORS = {
	...BASE_COLORS,

	primary: makeRGB(primaryChannel),
	primaryAlpha: makeRGBWithAlpha(primaryChannel),

	black: makeRGB(blackChannel),
	white: makeRGB(whiteChannel),
	blackAlpha: makeRGBWithAlpha(blackChannel),
	whiteAlpha: makeRGBWithAlpha(whiteChannel),

	bgBase: '#F0F0F0',
	bgPaper: '#FFFFFF'
};
