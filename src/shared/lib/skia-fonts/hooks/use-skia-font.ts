import { useMemo } from 'react';
import { SkFont, matchFont } from '@shopify/react-native-skia';
import { skiaFonts } from '../config/skia-fonts';
import { useSkiaFontsContext } from './use-skia-fonts-context';

type FontStyleType = {
	fontFamily?: keyof typeof skiaFonts;
	fontSize?: number;
	fontStyle?: 'normal' | 'italic' | 'oblique';
	fontWeight?:
		| 'normal'
		| 'bold'
		| '100'
		| '200'
		| '300'
		| '400'
		| '500'
		| '600'
		| '700'
		| '800'
		| '900';
};

export const useSkiaFont = ({
	fontFamily,
	fontSize,
	fontStyle = 'normal',
	fontWeight = 'normal'
}: FontStyleType): SkFont => {
	const { fontMgr } = useSkiaFontsContext();

	const matchedFont = useMemo(() => {
		return matchFont(
			{
				fontFamily,
				fontSize,
				fontStyle,
				fontWeight
			},
			fontMgr
		);
	}, [fontFamily, fontSize, fontStyle, fontWeight, fontMgr]);

	return matchedFont;
};
