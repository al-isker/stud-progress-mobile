import React from 'react';
import { ActivityIndicator, ActivityIndicatorProps } from 'react-native';
import { useStyles } from 'react-native-unistyles';

export interface LoaderProps extends ActivityIndicatorProps {}

export const Loader = ({ size = 'large', ...props }: LoaderProps) => {
	const { theme } = useStyles();

	return (
		<ActivityIndicator size={size} color={theme.colors.primary} {...props} />
	);
};
