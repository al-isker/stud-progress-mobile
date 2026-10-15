import { ReactNode } from 'react';
import { useFonts } from '@shopify/react-native-skia';
import {
	SKIA_FONT_SOURCES,
	SkiaFontsContextProvider
} from '@/shared/lib/fonts';

type SkiaFontsProviderProps = {
	children: ReactNode;
};

export const SkiaFontsProvider = ({ children }: SkiaFontsProviderProps) => {
	const fontMgr = useFonts(SKIA_FONT_SOURCES);

	if (fontMgr === null) {
		return null;
	}

	return (
		<SkiaFontsContextProvider value={{ fontMgr }}>
			{children}
		</SkiaFontsContextProvider>
	);
};
