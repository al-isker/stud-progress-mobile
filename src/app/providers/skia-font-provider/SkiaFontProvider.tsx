import { ReactNode } from 'react';
import { useFonts } from '@shopify/react-native-skia';
import { SKIA_FONT_SOURCES, SkiaFontContextProvider } from '@/shared/lib/fonts';

type SkiaFontProviderProps = {
	children: ReactNode;
};

export const SkiaFontProvider = ({ children }: SkiaFontProviderProps) => {
	const fontMgr = useFonts(SKIA_FONT_SOURCES);

	if (fontMgr === null) {
		return null;
	}

	return (
		<SkiaFontContextProvider value={{ fontMgr }}>
			{children}
		</SkiaFontContextProvider>
	);
};
