import React, { ReactNode, Ref, forwardRef, useEffect, useRef } from 'react';
import { composeRefs } from '@radix-ui/react-compose-refs';
import {
	TextInput as NativeTextInput,
	StyleProp,
	TouchableWithoutFeedback,
	View,
	ViewStyle
} from 'react-native';
import Animated, {
	useAnimatedStyle,
	useSharedValue,
	withTiming
} from 'react-native-reanimated';
import { useStyles } from 'react-native-unistyles';
import { multiple } from '@/shared/lib/function';
import { animationTimingConfig } from '../../model/const/animation-timing-config';
import { ErrorText } from '../error-text/ErrorText';
import {
	TextInputBase,
	TextInputBaseProps
} from '../text-input-base/TextInputBase';
import { stylesheet } from './text-field.stylesheet';

export type TextFieldProps = Omit<
	TextInputBaseProps,
	'size' | 'style' | 'placeholder'
> & {
	inputRef?: Ref<NativeTextInput>;
	size: 'large';
	style?: StyleProp<ViewStyle>;
	label: string;
	errorText?: ReactNode;
};

export const TextField = forwardRef<View, TextFieldProps>(function TextField(
	{
		inputRef: inputRefProp,
		size,
		style,
		label,
		errorText,
		value,
		defaultValue,
		onFocus: onFocusProp,
		onBlur: onBlurProp,
		onChangeText: onChangeTextProp,
		...props
	},
	ref
) {
	const { styles, theme } = useStyles(stylesheet, { size });

	const inputRef = useRef<NativeTextInput>(null);

	const isFocus = useSharedValue(false);
	const isValue = useSharedValue(!!(value ?? defaultValue)?.length);

	const inputAnimatedStyles = useAnimatedStyle(() => ({
		borderColor: withTiming(
			isFocus.value ? theme.colors.primary : styles.textInput.borderColor,
			animationTimingConfig
		)
	}));

	const labelAnimatedStyles = useAnimatedStyle(() => ({
		color: withTiming(
			isFocus.value ? theme.colors.primary : styles.label.color,
			animationTimingConfig
		),
		top: withTiming(
			isFocus.value || isValue.value ? styles.label.top / 2 : styles.label.top,
			animationTimingConfig
		),
		transform: [
			{
				scale: withTiming(
					isFocus.value || isValue.value ? 0.75 : 1,
					animationTimingConfig
				)
			}
		]
	}));

	useEffect(() => {
		if (typeof value === 'string') {
			isValue.set(!!value.length);
		}
	}, [value]);

	const setInputFocus = () => inputRef.current!.focus();

	const handleFocus = () => isFocus.set(true);
	const handleOnBlur = () => isFocus.set(false);

	const handleChangeText = (value: string) => {
		isValue.set(!!value.length);
	};

	return (
		<View ref={ref} style={[styles.textField, style]}>
			<TouchableWithoutFeedback onPress={setInputFocus}>
				<Animated.View style={[styles.textInput, inputAnimatedStyles]}>
					<Animated.Text style={[styles.label, labelAnimatedStyles]}>
						{label}
					</Animated.Text>
					<TextInputBase
						ref={composeRefs(inputRef, inputRefProp)}
						size={size}
						defaultValue={defaultValue}
						value={value}
						onFocus={multiple(handleFocus, onFocusProp)}
						onBlur={multiple(handleOnBlur, onBlurProp)}
						onChangeText={multiple(handleChangeText, onChangeTextProp)}
						{...props}
					/>
				</Animated.View>
			</TouchableWithoutFeedback>

			<ErrorText style={styles.errorText}>{errorText}</ErrorText>
		</View>
	);
});
