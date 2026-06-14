import { useMemo } from 'react';
import { SkFont, matchFont } from '@shopify/react-native-skia';
import { SKIA_FONTS } from '../const/skia-fonts';
import { useSkiaFontsContext } from './use-skia-fonts-context';

type FontStyleType = {
	fontFamily?: keyof typeof SKIA_FONTS;
	fontSize?: number;
	fontStyle?: 'normal' | 'italic' | 'oblique';
};

export const useSkiaFont = ({
	fontFamily,
	fontSize,
	fontStyle = 'normal'
}: FontStyleType): SkFont => {
	const { fontMgr } = useSkiaFontsContext();

	const matchedFont = useMemo(() => {
		return matchFont(
			{
				fontFamily,
				fontSize,
				fontStyle
			},
			fontMgr
		);
	}, [fontFamily, fontSize, fontStyle, fontMgr]);

	return matchedFont;
};
