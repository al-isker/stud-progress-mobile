import { createContext } from 'react';
import { SkiaFontContextValueType } from './skia-font-context-value-type';

export const SkiaFontContext = createContext<SkiaFontContextValueType | null>(
	null
);
