import { ReactNode, Ref, useEffect } from 'react';
import {
	StyleProp,
	TextInput,
	TextInputProps,
	View,
	ViewStyle
} from 'react-native';
import Animated, {
	useAnimatedStyle,
	useSharedValue,
	withTiming
} from 'react-native-reanimated';
import { StyleSheet, useUnistyles } from 'react-native-unistyles';
import { callAll } from '@/shared/lib/toolkit';
import { animationConfig } from '../../lib/animation/animation-config';
import { ErrorText } from '../error-text/ErrorText';

export type TextFieldProps = Omit<TextInputProps, 'style' | 'placeholder'> & {
	ref?: Ref<View>;
	inputRef?: Ref<TextInput>;
	size: 'large';
	style?: StyleProp<ViewStyle>;
	label: string;
	errorText?: ReactNode;
};

export const TextField = ({
	ref,
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
}: TextFieldProps) => {
	styles.useVariants({ size });

	const { theme } = useUnistyles();

	const sharedIsFocus = useSharedValue(false);
	const sharedIsThereValue = useSharedValue(
		Boolean((value ?? defaultValue)?.length)
	);

	const initialContainerBorderColor = styles.container.borderColor;
	const initialLabelColor = styles.label.color;
	const initialLabelTop = styles.label.top;

	const containerAnimatedStyle = useAnimatedStyle(() => ({
		borderColor: withTiming(
			sharedIsFocus.value ? theme.colors.primary : initialContainerBorderColor,
			animationConfig
		)
	}));

	const labelAnimatedStyle = useAnimatedStyle(() => ({
		color: withTiming(
			sharedIsFocus.value ? theme.colors.primary : initialLabelColor,
			animationConfig
		),
		top: withTiming(
			sharedIsFocus.value || sharedIsThereValue.value
				? initialLabelTop / 2
				: initialLabelTop,
			animationConfig
		),
		transformOrigin: 'top left',
		transform: [
			{
				scale: withTiming(
					sharedIsFocus.value || sharedIsThereValue.value ? 0.75 : 1,
					animationConfig
				)
			}
		]
	}));

	const handleFocus = () => sharedIsFocus.set(true);
	const handleBlur = () => sharedIsFocus.set(false);

	const handleChangeText = (value: string) => {
		sharedIsThereValue.set(Boolean(value.trim().length));
	};

	useEffect(() => {
		if (typeof value === 'string') {
			sharedIsThereValue.set(Boolean(value.trim().length));
		}
	}, [value]);

	return (
		<View ref={ref} style={style}>
			<Animated.View style={[styles.container, containerAnimatedStyle]}>
				<Animated.Text style={[styles.label, labelAnimatedStyle]}>
					{label}
				</Animated.Text>

				<TextInput
					ref={inputRefProp}
					style={styles.textInput}
					placeholderTextColor={theme.colors.blackAlpha(0.2)}
					defaultValue={defaultValue}
					value={value}
					onFocus={callAll(handleFocus, onFocus)}
					onBlur={callAll(handleBlur, onBlur)}
					onChangeText={callAll(handleChangeText, onChangeText)}
					{...props}
				/>
			</Animated.View>

			<ErrorText style={styles.errorText}>{errorText}</ErrorText>
		</View>
	);
};

const styles = StyleSheet.create(theme => ({
	container: {
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
		color: theme.colors.blackAlpha(0.3),
		fontFamily: theme.typography.fontFamilies.GolosTextRegular,

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
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		color: theme.colors.blackAlpha(0.8),
		fontFamily: theme.typography.fontFamilies.GolosTextRegular,

		variants: {
			size: {
				large: {
					paddingTop: 24,
					paddingHorizontal: 17,
					fontSize: 15
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
