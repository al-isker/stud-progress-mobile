import React, { forwardRef } from 'react';
import { ActivityIndicator, ActivityIndicatorProps } from 'react-native';
import { useStyles } from 'react-native-unistyles';

export type LoaderProps = ActivityIndicatorProps;

export const Loader = forwardRef<ActivityIndicator, LoaderProps>(
	function Loader({ size = 'large', ...props }, ref) {
		const { theme } = useStyles();

		return (
			<ActivityIndicator
				ref={ref}
				size={size}
				color={theme.colors.primary}
				{...props}
			/>
		);
	}
);
