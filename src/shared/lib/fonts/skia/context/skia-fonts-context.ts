import { createContext } from 'react';
import { SkiaFontsContextValueType } from './skia-fonts-context-value-type';

export const SkiaFontsContext = createContext<SkiaFontsContextValueType | null>(
	null
);
