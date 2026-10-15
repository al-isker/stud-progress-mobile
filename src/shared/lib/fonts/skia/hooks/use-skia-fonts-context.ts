import { useContext } from 'react';
import { SkiaFontsContext } from '../context/skia-fonts-context';

export const useSkiaFontsContext = () => {
	const skiaFontsContext = useContext(SkiaFontsContext);

	if (skiaFontsContext === null) {
		throw new Error('SkiaFontsContext not found');
	}

	return skiaFontsContext;
};
