import { Typography, TypographyProps } from '@/shared/ui/typography';

export type ErrorTextProps = Omit<TypographyProps, 'variant'>;

export const ErrorText = ({ style, children, ...props }: ErrorTextProps) => {
	if (children) {
		return (
			<Typography variant='error' style={[{ fontSize: 12 }, style]} {...props}>
				{children}
			</Typography>
		);
	}
};
