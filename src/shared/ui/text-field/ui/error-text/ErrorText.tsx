import React from 'react';
import { Typography, TypographyProps } from '@/shared/ui/typography';

export interface ErrorTextProps extends TypographyProps {}

export const ErrorText = ({ style, children, ...props }: ErrorTextProps) => {
	if (children) {
		return (
			<Typography color='error' style={[{ fontSize: 12 }, style]} {...props}>
				{children}
			</Typography>
		);
	}
};
