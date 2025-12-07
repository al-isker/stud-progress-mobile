import { LIGHT_THEME } from '../const/themes';

type AppThemes = {
	light: typeof LIGHT_THEME;
};

declare module 'react-native-unistyles' {
	export interface UnistylesThemes extends AppThemes {}
}
