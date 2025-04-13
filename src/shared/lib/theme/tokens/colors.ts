import { makeRGB } from '../utils/make-rgb';
import { makeRGBWithAlpha } from '../utils/make-rgb-with-alpha';

const primaryLightChannel = '75, 10, 255';
const primaryDarkChannel = '115, 115, 227';
const blackChannel = '0, 0, 0';
const whiteChannel = '255, 255, 255';
const redChannel = '255, 0, 0';
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

const LIGHT_COLORS = {
	...BASE_COLORS,

	primary: makeRGB(primaryLightChannel),
	primaryAlpha: makeRGBWithAlpha(primaryLightChannel),

	black: makeRGB(blackChannel),
	white: makeRGB(whiteChannel),
	blackAlpha: makeRGBWithAlpha(blackChannel),
	whiteAlpha: makeRGBWithAlpha(whiteChannel),

	bgBase: '#F0F0F0',
	bgPaper: '#FFFFFF'
};

const DARK_COLORS = {
	...BASE_COLORS,

	primary: makeRGB(primaryDarkChannel),
	primaryAlpha: makeRGBWithAlpha(primaryDarkChannel),

	black: makeRGB(whiteChannel),
	white: makeRGB(blackChannel),
	blackAlpha: makeRGBWithAlpha(whiteChannel),
	whiteAlpha: makeRGBWithAlpha(blackChannel),

	bgBase: '#F0F0F0',
	bgPaper: '#191919'
};

export { DARK_COLORS, LIGHT_COLORS };
