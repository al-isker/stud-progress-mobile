import { View } from 'react-native';
import { PaperProps } from '../lib/types/paper-props';
import { paperStyles } from './paper-styles';

export const PaperAndroid = ({
	style,
	contentContainerStyle,
	...props
}: PaperProps) => (
	<View
		style={[paperStyles.androidContainer, style, contentContainerStyle]}
		{...props}
	/>
);
