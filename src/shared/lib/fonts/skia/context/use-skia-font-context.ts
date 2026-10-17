import { useContext } from 'react';
import { SkiaFontContext } from './skia-font-context';

export const useSkiaFontContext = () => {
	const skiaFontContext = useContext(SkiaFontContext);

	if (skiaFontContext === null) {
		throw new Error('SkiaFontContext not found');
	}

	return skiaFontContext;
};
