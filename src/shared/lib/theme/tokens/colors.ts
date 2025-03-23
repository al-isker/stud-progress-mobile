const createRGB = (channel: string) => {
	return `rgb(${channel})`;
};

const createRGBWithAlpha = (channel: string) => {
	return (alpha: number) => `rgba(${channel} / ${alpha})`;
};

const primaryLightChannel = '75 10 255';
const primaryDarkChannel = '115 115 227';
const blackChannel = '0 0 0';
const whiteChannel = '255 255 255';

const BASE_COLORS = {
	alwaysBlack: createRGB(blackChannel),
	alwaysWhite: createRGB(whiteChannel),

	alwaysBlackAlpha: createRGBWithAlpha(blackChannel),
	alwaysWhiteAlpha: createRGBWithAlpha(whiteChannel),

	success: 'green',
	warning: 'yellow',
	error: 'red',

	transparent: 'transparent'
};

const LIGHT_COLORS = {
	...BASE_COLORS,

	primary: createRGB(primaryLightChannel),
	primaryAlpha: createRGBWithAlpha(primaryLightChannel),

	black: createRGB(blackChannel),
	white: createRGB(whiteChannel),
	blackAlpha: createRGBWithAlpha(blackChannel),
	whiteAlpha: createRGBWithAlpha(whiteChannel),

	bgBase: '#F0F0F0',
	bgPaper: '#FFFFFF'
};

const DARK_COLORS = {
	...BASE_COLORS,

	primary: createRGB(primaryDarkChannel),
	primaryAlpha: createRGBWithAlpha(primaryDarkChannel),

	black: createRGB(whiteChannel),
	white: createRGB(blackChannel),
	blackAlpha: createRGBWithAlpha(whiteChannel),
	whiteAlpha: createRGBWithAlpha(blackChannel),

	bgBase: '#F0F0F0',
	bgPaper: '#191919'
};

export { DARK_COLORS, LIGHT_COLORS };
