import { LIGHT_THEME } from '@/shared/lib/theme';

type AppThemes = {
	light: typeof LIGHT_THEME;
};

declare module 'react-native-unistyles' {
	export interface UnistylesThemes extends AppThemes {}
}
