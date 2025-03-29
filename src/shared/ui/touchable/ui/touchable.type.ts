import {
	TouchableNativeFeedback,
	TouchableNativeFeedbackProps,
	TouchableOpacityProps,
	View,
	ViewProps
} from 'react-native';

export type TouchableRef = TouchableNativeFeedback & View;

type TouchableEventProps = Pick<
	| Omit<TouchableNativeFeedbackProps, 'background'>
	| Omit<TouchableOpacityProps, 'activeOpacity'>,
	'onPress' | 'onPressIn' | 'onPressOut' | 'onLongPress' | 'onFocus' | 'onBlur'
>;

export type TouchableProps = ViewProps &
	TouchableEventProps & {
		androidFeedbackColor?: string;
		iOSActiveOpacity?: number;
	};
