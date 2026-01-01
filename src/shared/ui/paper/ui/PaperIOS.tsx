import { View } from 'react-native';
import { PaperProps } from '../lib/types/paper-props';
import { paperStyles } from './paper-styles';

export const PaperIOS = ({
	children,
	style,
	contentContainerStyle,
	...props
}: PaperProps) => (
	<View style={[paperStyles.iosContainer, style]} {...props}>
		<View style={[paperStyles.iosContentContainer, contentContainerStyle]}>
			{children}
		</View>
	</View>
);
