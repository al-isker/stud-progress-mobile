import { ReactNode, Ref } from 'react';
import {
	ColorValue,
	PressableProps as NativePressableProps,
	StyleProp,
	View,
	ViewStyle
} from 'react-native';

export type PressableProps = Omit<
	NativePressableProps,
	'children' | 'android_ripple' | 'style'
> & {
	children?: ReactNode;
	ref?: Ref<View>;
	feedbackColor: ColorValue;
	style?: StyleProp<ViewStyle>;
};
