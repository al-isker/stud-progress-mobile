import { Link } from 'expo-router';
import { StyleProp, Text, View, ViewStyle } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { HeartBrokenIcon } from '@/shared/assets/icons';
import { links } from '@/shared/config/navigation';
import { Button } from '../../button';

export type ErrorDisplayProps = {
	style?: StyleProp<ViewStyle>;
	title?: string;
	text?: string;
	onRefresh?: () => void;
};

export const ErrorDisplay = ({
	style,
	title,
	text,
	onRefresh
}: ErrorDisplayProps) => {
	const { styles, theme } = useStyles(stylesheet);

	return (
		<View style={[styles.container, style]}>
			<HeartBrokenIcon style={styles.icon} color={theme.colors.red} />

			<View style={styles.contentContainer}>
				<Text style={styles.title}>{title}</Text>

				<Text style={styles.text}>{text}</Text>
			</View>

			<View style={styles.actions}>
				<Link href={links.supportTelegram} asChild>
					<Button variant='secondary' title='поддержка' />
				</Link>

				{onRefresh && <Button title='обновить' onPress={onRefresh} />}
			</View>
		</View>
	);
};

const stylesheet = createStyleSheet(theme => ({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	contentContainer: {
		paddingHorizontal: 24,
		justifyContent: 'center',
		alignItems: 'center',
		rowGap: 6
	},
	icon: {
		width: 40,
		height: 40,
		marginBottom: 4
	},
	title: {
		textAlign: 'center',
		color: theme.colors.blackAlpha(0.8),
		fontSize: 20,
		fontFamily: theme.typography.fontFamily.GolosTextSemiBold
	},
	text: {
		textAlign: 'center',
		color: theme.colors.blackAlpha(0.65),
		fontSize: 14,
		fontFamily: theme.typography.fontFamily.GolosTextRegular
	},
	actions: {
		marginTop: 14,
		alignItems: 'baseline',
		rowGap: 8
	}
}));
