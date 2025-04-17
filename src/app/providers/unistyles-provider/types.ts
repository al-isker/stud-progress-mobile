import { BREAKPOINTS, darkTheme, lightTheme } from '@/shared/lib/theme';

type AppBreakpoints = typeof BREAKPOINTS;

type AppThemes = {
	light: typeof lightTheme;
	dark: typeof darkTheme;
};

declare module 'react-native-unistyles' {
	export interface UnistylesBreakpoints extends AppBreakpoints {}
	export interface UnistylesThemes extends AppThemes {}
}
