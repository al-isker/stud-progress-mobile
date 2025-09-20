import { ReactNode } from 'react';
import {
	ColorValue,
	PressableProps as NativePressableProps,
	StyleProp,
	ViewStyle
} from 'react-native';

export type PressableProps = Omit<
	NativePressableProps,
	'children' | 'android_ripple' | 'style'
> & {
	children?: ReactNode;
	feedbackColor: ColorValue;
	style?: StyleProp<ViewStyle>;
};
