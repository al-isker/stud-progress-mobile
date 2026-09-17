import { LIGHT_THEME } from '../const/themes';

type AppThemesType = {
	light: typeof LIGHT_THEME;
};

declare module 'react-native-unistyles' {
	export interface UnistylesThemes extends AppThemesType {}
}
