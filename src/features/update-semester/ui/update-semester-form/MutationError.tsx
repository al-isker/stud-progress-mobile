import { useCallback } from 'react';
import { useFocusEffect } from 'expo-router';
import { StyleProp, Text, TextStyle } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { apiMessage } from '@/shared/lib/api-message';
import { useRerender } from '@/shared/lib/react-sugar';
import { useUpdateSemesterContext } from '../../model/hooks/use-update-semester-context';

type MutationErrorProps = {
	style?: StyleProp<TextStyle>;
};

export const MutationError = ({ style }: MutationErrorProps) => {
	const rerender = useRerender();

	const { styles } = useStyles(stylesheet);

	const { mutationErrorRef } = useUpdateSemesterContext();

	const status = mutationErrorRef.current?.status;
	const responseMessage = mutationErrorRef.current?.response?.data.message;

	const strResponseMessage = Array.isArray(responseMessage)
		? responseMessage.join(', ')
		: responseMessage;

	const message =
		status && status >= 500 && status < 600
			? apiMessage.lkServerError
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

const stylesheet = createStyleSheet(theme => ({
	text: {
		color: theme.colors.red,
		fontSize: 14,
		fontFamily: theme.typography.fontFamily.GolosTextRegular
	}
}));
