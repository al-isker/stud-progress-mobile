import { Ref } from 'react';
import { ActivityIndicator, ActivityIndicatorProps } from 'react-native';
import { useStyles } from 'react-native-unistyles';

export type CircularLoaderProps = ActivityIndicatorProps & {
	ref?: Ref<ActivityIndicator>;
};

export const CircularLoader = ({
	size = 'large',
	...props
}: CircularLoaderProps) => {
	const { theme } = useStyles();

	return (
		<ActivityIndicator size={size} color={theme.colors.primary} {...props} />
	);
};
