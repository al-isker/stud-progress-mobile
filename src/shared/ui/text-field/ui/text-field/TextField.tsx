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
import { animationConfig } from '../../lib/animation/animation-config';
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
		onFocus,
		onBlur,
		onChangeText,
		...props
	},
	ref
) {
	const { styles, theme } = useStyles(stylesheet, { size });

	const inputRef = useRef<NativeTextInput>(null);

	const sharedIsFocus = useSharedValue(false);
	const sharedIsThereValue = useSharedValue(!!(value ?? defaultValue)?.length);

	const inputAnimatedStyles = useAnimatedStyle(() => ({
		borderColor: withTiming(
			sharedIsFocus.value ? theme.colors.primary : styles.textInput.borderColor,
			animationConfig
		)
	}));

	const labelAnimatedStyles = useAnimatedStyle(() => ({
		color: withTiming(
			sharedIsFocus.value ? theme.colors.primary : styles.label.color,
			animationConfig
		),
		top: withTiming(
			sharedIsFocus.value || sharedIsThereValue.value
				? styles.label.top / 2
				: styles.label.top,
			animationConfig
		),
		transform: [
			{
				scale: withTiming(
					sharedIsFocus.value || sharedIsThereValue.value ? 0.75 : 1,
					animationConfig
				)
			}
		]
	}));

	useEffect(() => {
		if (typeof value === 'string') {
			sharedIsThereValue.set(!!value.length);
		}
	}, [value]);

	const setInputFocus = () => inputRef.current!.focus();

	const handleFocus = () => sharedIsFocus.set(true);
	const handleBlur = () => sharedIsFocus.set(false);

	const handleChangeText = (value: string) => {
		sharedIsThereValue.set(!!value.length);
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
						onFocus={multiple(handleFocus, onFocus)}
						onBlur={multiple(handleBlur, onBlur)}
						onChangeText={multiple(handleChangeText, onChangeText)}
						{...props}
					/>
				</Animated.View>
			</TouchableWithoutFeedback>

			<ErrorText style={styles.errorText}>{errorText}</ErrorText>
		</View>
	);
});
