import { createContext } from 'react';
import { SkFontMgr } from '@shopify/react-native-skia';

export const SkiaFontsContext = createContext<{ fontMgr: SkFontMgr } | null>(
	null
);
