import React, { FC, forwardRef } from 'react';
import { ImageStyle, StyleProp, Text, View, ViewStyle } from 'react-native';
import Animated from 'react-native-reanimated';
import { useStyles } from 'react-native-unistyles';
import { useBorderRadiusAnimation } from '@/shared/lib/animations/hooks/use-border-radius-animation';
import { multiple } from '@/shared/lib/function';
import { Touchable, TouchableProps } from '@/shared/ui/touchable';
import { stylesheet } from './button.stylesheet';

interface ButtonProps extends Omit<TouchableProps, 'children'> {
	variant: 'primary' | 'secondary' | 'text';
	size?: 'large' | 'medium';
	title?: string;
	StartIcon?: FC<{ style: StyleProp<ViewStyle | ImageStyle> }>;
	EndIcon?: FC<{ style: StyleProp<ViewStyle | ImageStyle> }>;
}

export const Button = forwardRef<View, ButtonProps>(function Button(
	{
		variant,
		size = 'medium',
		style,
		title,
		StartIcon,
		EndIcon,
		onPressIn,
		onPressOut,
		...touchableProps
	},
	ref
) {
	const { styles } = useStyles(stylesheet, { variant, size });

	const { borderRadius, handleLayout, animationIn, animationOut } =
		useBorderRadiusAnimation({ borderRadius: styles.wrapper.borderRadius });

	return (
		<Animated.View
			ref={ref}
			style={[styles.wrapper, { borderRadius }, style]}
			onLayout={handleLayout}
		>
			<Touchable
				style={styles.touchable}
				androidFeedbackColor={styles.touchable.androidFeedbackColor}
				iOSActiveOpacity={styles.touchable.iOSActiveOpacity}
				onPressIn={multiple(animationIn, onPressIn)}
				onPressOut={multiple(animationOut, onPressOut)}
				{...touchableProps}
			>
				{StartIcon && <StartIcon style={styles.icon} />}

				<Text style={styles.title}>{title}</Text>

				{EndIcon && <EndIcon style={styles.icon} />}
			</Touchable>
		</Animated.View>
	);
});
