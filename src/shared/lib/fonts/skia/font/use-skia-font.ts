import { useMemo } from 'react';
import { SkFont, matchFont } from '@shopify/react-native-skia';
import { FONT_FAMILY, FONT_STYLE, FONT_WEIGHT } from '@/shared/config/fonts';
import { ValueOf } from '@/shared/lib/ts-toolkit';
import { useSkiaFontContext } from '../context/use-skia-font-context';

type FontStyleType = {
	fontSize?: number;
	fontFamily?: ValueOf<typeof FONT_FAMILY>;
	fontWeight?: ValueOf<typeof FONT_WEIGHT>;
	fontStyle?: ValueOf<typeof FONT_STYLE>;
};

export const useSkiaFont = ({
	fontSize,
	fontFamily,
	fontWeight,
	fontStyle
}: FontStyleType): SkFont => {
	const { fontMgr } = useSkiaFontContext();

	const matchedFont = useMemo(() => {
		return matchFont(
			{
				...(fontSize !== undefined && { fontSize }),
				...(fontFamily !== undefined && { fontFamily }),
				...(fontWeight !== undefined && { fontWeight }),
				...(fontStyle !== undefined && { fontStyle })
			},
			fontMgr
		);
	}, [fontSize, fontFamily, fontWeight, fontStyle, fontMgr]);

	return matchedFont;
};
