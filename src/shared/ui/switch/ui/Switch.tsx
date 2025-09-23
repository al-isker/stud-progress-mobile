import { Ref } from 'react';
import {
	Switch as NativeSwitch,
	SwitchProps as NativeSwitchProps,
	Platform
} from 'react-native';
import { useStyles } from 'react-native-unistyles';

export type SwitchProps = NativeSwitchProps & {
	ref?: Ref<NativeSwitch>;
};

export const Switch = (props: SwitchProps) => {
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

	return <NativeSwitch {...platformProps} {...props} />;
};
