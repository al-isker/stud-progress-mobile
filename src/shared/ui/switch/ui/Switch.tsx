import { forwardRef } from 'react';
import {
	Switch as NativeSwitch,
	SwitchProps as NativeSwitchProps,
	Platform
} from 'react-native';
import { useStyles } from 'react-native-unistyles';

export type SwitchProps = NativeSwitchProps;

export const Switch = forwardRef<NativeSwitch, SwitchProps>(
	function Switch(props, forwardedRef) {
		const { theme } = useStyles();

		const platformProps = Platform.select<NativeSwitchProps>({
			android: {
				trackColor: { true: theme.colors.primaryAlpha(0.2) },
				thumbColor: props.value ? theme.colors.primary : undefined
			},
			ios: {
				trackColor: { true: theme.colors.primary }
			}
		});

		return <NativeSwitch ref={forwardedRef} {...platformProps} {...props} />;
	}
);
