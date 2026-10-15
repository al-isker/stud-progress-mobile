import { useCallback } from 'react';
import { useFocusEffect } from 'expo-router';
import { StyleProp, Text, TextStyle } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';
import { useRerender } from '@/shared/lib/react-hooks';
import { useLoginContext } from '../../model/login-context/use-login-context';

type MutationErrorProps = {
	style?: StyleProp<TextStyle>;
};

export const MutationError = ({ style }: MutationErrorProps) => {
	const rerender = useRerender();

	const { mutationErrorRef } = useLoginContext();

	const status = mutationErrorRef.current?.status;
	const responseMessage = mutationErrorRef.current?.response?.data.message;

	const strResponseMessage = Array.isArray(responseMessage)
		? responseMessage.join(', ')
		: responseMessage;

	const message =
		status && status >= 500 && status < 600
			? 'Неизвестная ошибка сервера'
			: strResponseMessage;

	useFocusEffect(
		useCallback(() => {
			if (mutationErrorRef.current) {
				rerender();
			}
		}, [mutationErrorRef])
	);

	if (message) {
		return <Text style={[styles.text, style]}>{message}</Text>;
	}
};

const styles = StyleSheet.create(theme => ({
	text: {
		color: theme.colors.red,
		fontSize: 14,
		fontFamily: theme.typography.fontFamilies.GolosText,
		fontWeight: theme.typography.fontWeights.Regular
	}
}));
