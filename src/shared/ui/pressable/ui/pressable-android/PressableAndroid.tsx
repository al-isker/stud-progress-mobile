import { forwardRef } from 'react';
import { Pressable, View } from 'react-native';
import { PressableProps } from '../../model/types/pressable-props';

export const PressableAndroid = forwardRef<View, PressableProps>(
	function PressableAndroid({ feedbackColor, style, ...props }, forwardedRef) {
		return (
			<Pressable
				ref={forwardedRef}
				style={[{ overflow: 'hidden' }, style]}
				android_ripple={{
					color: feedbackColor,
					foreground: true
				}}
				{...props}
			/>
		);
	}
);
