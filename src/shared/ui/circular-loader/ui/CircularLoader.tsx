import { Ref } from 'react';
import { ActivityIndicator, ActivityIndicatorProps } from 'react-native';
import { useUnistyles } from 'react-native-unistyles';

export type CircularLoaderProps = ActivityIndicatorProps & {
	ref?: Ref<ActivityIndicator>;
};

export const CircularLoader = ({
	size = 'large',
	...props
}: CircularLoaderProps) => {
	const { theme } = useUnistyles();

	return (
		<ActivityIndicator size={size} color={theme.colors.primary} {...props} />
	);
};
