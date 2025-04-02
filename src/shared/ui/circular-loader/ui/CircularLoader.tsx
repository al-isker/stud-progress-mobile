import React, { forwardRef } from 'react';
import { ActivityIndicator, ActivityIndicatorProps } from 'react-native';
import { useStyles } from 'react-native-unistyles';

export type CircularLoaderProps = ActivityIndicatorProps;

export const CircularLoader = forwardRef<
	ActivityIndicator,
	CircularLoaderProps
>(function Loader({ size = 'large', ...props }, ref) {
	const { theme } = useStyles();

	return (
		<ActivityIndicator
			ref={ref}
			size={size}
			color={theme.colors.primary}
			{...props}
		/>
	);
});
