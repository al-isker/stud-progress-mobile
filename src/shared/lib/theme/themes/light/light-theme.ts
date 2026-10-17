import { LIGHT_PALETTE } from '../../tokens/palette/light-palette';
import { BASE_THEME } from '../base/base-theme';

export const LIGHT_THEME = {
	...BASE_THEME,
	colors: LIGHT_PALETTE
} as const;
