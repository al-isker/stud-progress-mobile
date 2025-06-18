import { ReactNode, Ref, forwardRef, useEffect, useRef } from 'react';
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
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { multiple } from '@/shared/lib/function';
import { animationConfig } from '../../lib/animation/animation-config';
import { ErrorText } from '../error-text/ErrorText';
import { TextInput, TextInputProps } from '../text-input/TextInput';

export type TextFieldProps = Omit<
	TextInputProps,
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
	forwardedRef
) {
	const { styles, theme } = useStyles(stylesheet, { size });

	const inputRef = useRef<NativeTextInput>(null);

	const sharedIsFocus = useSharedValue(false);
	const sharedIsThereValue = useSharedValue(!!(value ?? defaultValue)?.length);

	const textInputContainerStyles = useAnimatedStyle(() => ({
		borderColor: withTiming(
			sharedIsFocus.value
				? theme.colors.primary
				: styles.textInputContainer.borderColor,
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

	const handleTouchablePress = () => {
		inputRef.current!.focus();
	};

	const handleFocus = () => sharedIsFocus.set(true);
	const handleBlur = () => sharedIsFocus.set(false);

	const handleChangeText = (value: string) => {
		sharedIsThereValue.set(!!value.length);
	};

	return (
		<View ref={forwardedRef} style={style}>
			<TouchableWithoutFeedback onPress={handleTouchablePress}>
				<Animated.View
					style={[styles.textInputContainer, textInputContainerStyles]}
				>
					<Animated.Text style={[styles.label, labelAnimatedStyles]}>
						{label}
					</Animated.Text>
					<TextInput
						ref={composeRefs(inputRef, inputRefProp)}
						size={size}
						style={styles.textInput}
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

const stylesheet = createStyleSheet(theme => ({
	textInputContainer: {
		position: 'relative',
		borderWidth: 1,
		borderColor: theme.colors.blackAlpha(0.1),
		backgroundColor: theme.colors.primaryAlpha(0.05),

		variants: {
			size: {
				large: {
					height: 54,
					borderRadius: theme.borderRadius * 1.35
				}
			}
		}
	},
	label: {
		position: 'absolute',
		transformOrigin: 'top left',
		color: theme.colors.blackAlpha(0.3),
		fontFamily: theme.typography.fontFamily.GolosTextRegular,

		variants: {
			size: {
				large: {
					top: 17.5,
					left: 17,
					fontSize: 15
				}
			}
		}
	},
	textInput: {
		position: 'absolute',

		variants: {
			size: {
				large: {
					top: 24,
					left: 17,
					right: 17
				}
			}
		}
	},
	errorText: {
		marginTop: 2,

		variants: {
			size: {
				large: {
					marginHorizontal: 18
				}
			}
		}
	}
}));
