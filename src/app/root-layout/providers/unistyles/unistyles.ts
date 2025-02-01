import { UnistylesRegistry } from 'react-native-unistyles';
import { BREAKPOINTS, darkTheme, lightTheme } from '@/shared/lib/unistyles';

UnistylesRegistry.addBreakpoints(BREAKPOINTS)
	.addThemes({
		light: lightTheme,
		dark: darkTheme
	})
	.addConfig({
		adaptiveThemes: true
	});
