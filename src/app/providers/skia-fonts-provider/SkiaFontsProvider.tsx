import { ReactNode } from 'react';
import { useFonts } from '@shopify/react-native-skia';
import { SkiaFontsContext, skiaFonts } from '@/shared/lib/skia-fonts';

type SkiaFontsProviderProps = {
	children: ReactNode;
};

export const SkiaFontsProvider = ({ children }: SkiaFontsProviderProps) => {
	const fontMgr = useFonts(skiaFonts);

	if (fontMgr === null) {
		return null;
	}

	return (
		<SkiaFontsContext.Provider value={{ fontMgr }}>
			{children}
		</SkiaFontsContext.Provider>
	);
};
