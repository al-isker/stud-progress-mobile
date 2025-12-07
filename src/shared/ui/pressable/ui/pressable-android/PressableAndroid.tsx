import { Pressable as NativePressable } from 'react-native';
import { PressableProps } from '../../model/types/pressable-props';

export const PressableAndroid = ({
	feedbackColor,
	style,
	...props
}: PressableProps) => (
	<NativePressable
		style={[{ overflow: 'hidden' }, style]}
		android_ripple={{
			color: feedbackColor,
			foreground: true
		}}
		{...props}
	/>
);
