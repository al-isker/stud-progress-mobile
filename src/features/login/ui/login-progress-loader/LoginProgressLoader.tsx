import React from 'react';
import { StyleProp, TextStyle } from 'react-native';
import { useProgressAnimation } from '@/shared/lib/animations';
import {
	ProgressLoader,
	ProgressLoaderProps
} from '@/shared/ui/progress-loader';
import { useLogin } from '../../model/hooks/use-login';

type LoginProgressLoaderProps = Pick<ProgressLoaderProps, 'colorOnPrimary'> & {
	style?: StyleProp<TextStyle>;
};

export const LoginProgressLoader = ({
	style,
	colorOnPrimary
}: LoginProgressLoaderProps) => {
	const { progress, animationStart, animationComplete } =
		useProgressAnimation();

	useLogin({
		onStart: animationStart,
		onSuccess: animationComplete
	});

	return (
		<ProgressLoader
			style={style}
			colorOnPrimary={colorOnPrimary}
			value={progress}
		/>
	);
};
