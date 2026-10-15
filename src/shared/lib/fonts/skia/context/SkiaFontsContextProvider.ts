import { Provider } from 'react';
import { SkiaFontsContext } from './skia-fonts-context';
import { SkiaFontsContextValueType } from './skia-fonts-context-value-type';

export const SkiaFontsContextProvider: Provider<SkiaFontsContextValueType> =
	SkiaFontsContext.Provider;
