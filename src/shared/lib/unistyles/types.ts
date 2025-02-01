import { darkTheme } from './themes/dark';
import { lightTheme } from './themes/light';
import { BREAKPOINTS } from './tokens/breakpoints';

type AppBreakpoints = typeof BREAKPOINTS;

type AppThemes = {
	light: typeof lightTheme;
	dark: typeof darkTheme;
};

declare module 'react-native-unistyles' {
	export interface UnistylesBreakpoints extends AppBreakpoints {}
	export interface UnistylesThemes extends AppThemes {}
}
