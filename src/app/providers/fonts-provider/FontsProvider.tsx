import { ReactNode } from 'react';
import { useFonts } from 'expo-font';
import * as Fonts from '@/shared/assets/fonts';

type FontsProviderProps = {
	children: ReactNode;
};

export const FontsProvider = ({ children }: FontsProviderProps) => {
	const [isFontsLoaded] = useFonts(Fonts);

	if (isFontsLoaded) {
		return children;
	}
};
