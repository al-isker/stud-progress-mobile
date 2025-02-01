import { BREAKPOINTS, darkTheme, lightTheme } from '@/shared/lib/unistyles';
import React, { ReactNode } from 'react';
import {
	UnistylesProvider as RNUnistylesProvider,
	UnistylesRegistry
} from 'react-native-unistyles';

UnistylesRegistry.addBreakpoints(BREAKPOINTS)
	.addThemes({
		light: lightTheme,
		dark: darkTheme
	})
	.addConfig({
		adaptiveThemes: true
	});

export const UnistylesProvider = ({ children }: { children: ReactNode }) => (
	<RNUnistylesProvider>{children}</RNUnistylesProvider>
);
