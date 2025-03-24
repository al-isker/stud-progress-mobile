import React, { useCallback } from 'react';
import { useFocusEffect } from 'expo-router';
import { StyleProp, TextStyle } from 'react-native';
import { useRerender } from '@/shared/lib/react-sugar';
import { Typography } from '@/shared/ui/typography';
import { useLoginContext } from '../../model/selectors/use-login-context';

interface ErrorMutationProps {
	style?: StyleProp<TextStyle>;
}

export const ErrorMutation = ({ style }: ErrorMutationProps) => {
	const rerender = useRerender();

	const { errorMutationRef } = useLoginContext();

	useFocusEffect(
		useCallback(() => {
			if (errorMutationRef.current) {
				rerender();
			}
		}, [errorMutationRef])
	);

	if (errorMutationRef.current) {
		return (
			<Typography variant='error' style={[{ textAlign: 'center' }, style]}>
				{errorMutationRef.current.message}
			</Typography>
		);
	}
};
