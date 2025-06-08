import { ReactNode, Ref } from 'react';
import {
	ColorValue,
	StyleProp,
	TouchableNativeFeedbackProps,
	TouchableWithoutFeedbackProps,
	ViewProps,
	ViewStyle
} from 'react-native';
import { TouchableFeedbackElement } from './touchable-element';

type TouchableEvents = Pick<
	TouchableNativeFeedbackProps & TouchableWithoutFeedbackProps,
	'onPress' | 'onPressIn' | 'onPressOut' | 'onLongPress' | 'onFocus' | 'onBlur'
>;

export type TouchableFeedbackProps = TouchableEvents & {
	children?: ReactNode;
	feedbackColor: ColorValue;
	contentContainerStyle?: StyleProp<ViewStyle>;
};

export type TouchableProps = ViewProps &
	TouchableEvents & {
		touchableFeedbackRef?: Ref<TouchableFeedbackElement>;
		feedbackColor: ColorValue;
		contentContainerStyle?: StyleProp<ViewStyle>;
	};
