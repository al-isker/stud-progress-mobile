import { Provider } from 'react';
import { SkiaFontContext } from '../context/skia-font-context';
import { SkiaFontContextValueType } from '../context/skia-font-context-value-type';

export const SkiaFontContextProvider: Provider<SkiaFontContextValueType> =
	SkiaFontContext.Provider;
