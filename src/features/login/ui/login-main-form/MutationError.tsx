import React, { useCallback } from 'react';
import { useFocusEffect } from 'expo-router';
import { StyleProp, TextStyle } from 'react-native';
import { useRerender } from '@/shared/lib/react-sugar';
import { Typography } from '@/shared/ui/typography';
import { useLoginContext } from '../../model/hooks/use-login-context';

interface ErrorMutationProps {
	style?: StyleProp<TextStyle>;
}

export const MutationError = ({ style }: ErrorMutationProps) => {
	const rerender = useRerender();

	const { mutationErrorRef } = useLoginContext();

	const message = mutationErrorRef.current?.response?.data.message;

	useFocusEffect(
		useCallback(() => {
			if (mutationErrorRef.current) {
				rerender();
			}
		}, [mutationErrorRef])
	);

	if (message) {
		return (
			<Typography variant='error' style={[{ textAlign: 'center' }, style]}>
				{Array.isArray(message) ? message.join(', ') : message}
			</Typography>
		);
	}
};
