import React, { FC, forwardRef } from 'react';
import { ImageStyle, StyleProp, Text, View, ViewStyle } from 'react-native';
import Animated from 'react-native-reanimated';
import { UnistylesVariants, useStyles } from 'react-native-unistyles';
import { useBorderRadiusAnimation } from '@/shared/lib/animations/hooks/use-border-radius-animation';
import { multiple } from '@/shared/lib/function';
import { Touchable, TouchableProps } from '@/shared/ui/touchable';
import { stylesheet } from './button.stylesheet';

export type ButtonProps = Omit<TouchableProps, 'children'> &
	UnistylesVariants<typeof stylesheet> & {
		title?: string;
		StartSlot?: FC<{ style: StyleProp<ViewStyle | ImageStyle> }>;
		EndSlot?: FC<{ style: StyleProp<ViewStyle | ImageStyle> }>;
	};

export const Button = forwardRef<View, ButtonProps>(function Button(
	{
		variant,
		size = 'medium',
		style,
		title,
		StartSlot,
		EndSlot,
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
				{StartSlot && <StartSlot style={styles.slot} />}

				<Text style={styles.title}>{title}</Text>

				{EndSlot && <EndSlot style={styles.slot} />}
			</Touchable>
		</Animated.View>
	);
});
