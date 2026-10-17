import { THEMES } from '../../themes/themes';

type ThemesType = typeof THEMES;

declare module 'react-native-unistyles' {
	export interface UnistylesThemes extends ThemesType {}
}
