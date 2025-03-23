import React, { forwardRef } from 'react';
import {
	Platform,
	TouchableNativeFeedback,
	TouchableOpacity,
	View
} from 'react-native';
import { useStyles } from 'react-native-unistyles';
import { TouchableProps, TouchableRef } from './touchable.type';

export const Touchable = forwardRef<TouchableRef, TouchableProps>(
	(
		{
			androidFeedbackColor,
			iOSActiveOpacity,
			onPress,
			onPressIn,
			onPressOut,
			onLongPress,
			onFocus,
			onBlur,
			...viewProps
		},
		ref
	) => {
		const { theme } = useStyles();

		const touchableEventProps = {
			onPress,
			onPressIn,
			onPressOut,
			onLongPress,
			onFocus,
			onBlur
		};

		return Platform.select({
			android: (
				<TouchableNativeFeedback
					ref={ref}
					background={TouchableNativeFeedback.Ripple(
						androidFeedbackColor ?? theme.colors.blackAlpha(0.15),
						false
					)}
					{...touchableEventProps}
				>
					<View {...viewProps} />
				</TouchableNativeFeedback>
			),
			ios: (
				<TouchableOpacity
					ref={ref}
					activeOpacity={iOSActiveOpacity ?? 0.8}
					{...touchableEventProps}
				>
					<View {...viewProps} />
				</TouchableOpacity>
			)
		});
	}
);
