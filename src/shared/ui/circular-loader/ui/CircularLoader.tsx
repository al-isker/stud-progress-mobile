import { forwardRef } from 'react';
import { ActivityIndicator, ActivityIndicatorProps } from 'react-native';
import { useStyles } from 'react-native-unistyles';

export type CircularLoaderProps = ActivityIndicatorProps;

export const CircularLoader = forwardRef<
	ActivityIndicator,
	CircularLoaderProps
>(function Loader({ size = 'large', ...props }, forwardedRef) {
	const { theme } = useStyles();

	return (
		<ActivityIndicator
			ref={forwardedRef}
			size={size}
			color={theme.colors.primary}
			{...props}
		/>
	);
});
