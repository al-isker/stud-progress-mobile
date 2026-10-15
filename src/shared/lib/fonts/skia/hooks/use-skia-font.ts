import { useMemo } from 'react';
import { SkFont, matchFont } from '@shopify/react-native-skia';
import { FONT_FAMILIES, FONT_WEIGHTS } from '@/shared/config/fonts';
import { useSkiaFontsContext } from './use-skia-fonts-context';

type FontStyleType = {
	fontFamily?: (typeof FONT_FAMILIES)[keyof typeof FONT_FAMILIES];
	fontWeight?: (typeof FONT_WEIGHTS)[keyof typeof FONT_WEIGHTS];
	fontSize?: number;
	fontStyle?: 'normal' | 'italic' | 'oblique';
};

export const useSkiaFont = ({
	fontFamily,
	fontWeight,
	fontSize,
	fontStyle
}: FontStyleType): SkFont => {
	const { fontMgr } = useSkiaFontsContext();

	const matchedFont = useMemo(() => {
		return matchFont(
			{
				...(fontFamily !== undefined && { fontFamily }),
				...(fontWeight !== undefined && { fontWeight }),
				...(fontSize !== undefined && { fontSize }),
				...(fontStyle !== undefined && { fontStyle })
			},
			fontMgr
		);
	}, [fontFamily, fontWeight, fontSize, fontStyle, fontMgr]);

	return matchedFont;
};
