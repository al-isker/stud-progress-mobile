import React from 'react';
import { StyleProp, TextStyle, View } from 'react-native';
import Animated, { useAnimatedStyle } from 'react-native-reanimated';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { useLogin } from '../../model/hooks/use-login';

interface LoginLoaderProps {
	style?: StyleProp<TextStyle>;
}

export const LoginLoader = ({ style }: LoginLoaderProps) => {
	const { styles } = useStyles(stylesheet);

	const { progress } = useLogin();

	const progressAnimatedStyle = useAnimatedStyle(() => ({
		width: `${progress.value}%`
	}));

	return (
		<View style={[styles.loader, style]}>
			<Animated.View style={[styles.progress, progressAnimatedStyle]} />
		</View>
	);
};

const stylesheet = createStyleSheet(theme => ({
	loader: {
		height: 10,
		overflow: 'hidden',
		borderRadius: 1000,
		backgroundColor: theme.colors.alwaysBlackAlpha(0.3)
	},
	progress: {
		height: '100%',
		backgroundColor: theme.colors.alwaysWhite
	}
}));
