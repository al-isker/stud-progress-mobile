import { createRGB } from '../../color/create-rgb';
import { createRGBWithAlpha } from '../../color/create-rgb-with-alpha';
import { BASE_PALETTE } from './base-palette';

const primaryChannel = '75, 10, 255';
const blackChannel = '0, 0, 0';
const whiteChannel = '255, 255, 255';

export const LIGHT_PALETTE = {
	...BASE_PALETTE,

	primary: createRGB(primaryChannel),
	primaryAlpha: createRGBWithAlpha(primaryChannel),

	black: createRGB(blackChannel),
	white: createRGB(whiteChannel),
	blackAlpha: createRGBWithAlpha(blackChannel),
	whiteAlpha: createRGBWithAlpha(whiteChannel),

	bgBase: '#F0F0F0',
	bgPaper: '#FFFFFF'
} as const;
