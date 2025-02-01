import React, { ReactNode } from 'react';
import { UnistylesProvider as RNUnistylesProvider } from 'react-native-unistyles';
import './unistyles';

export const UnistylesProvider = ({ children }: { children: ReactNode }) => (
	<RNUnistylesProvider>{children}</RNUnistylesProvider>
);
