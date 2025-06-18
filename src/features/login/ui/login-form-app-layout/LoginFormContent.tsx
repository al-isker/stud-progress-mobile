import { ReactNode } from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { Paper } from '@/shared/ui/paper';
import { Typography } from '@/shared/ui/typography';

type LoginFormContentProps = {
	children: ReactNode;
	style?: StyleProp<ViewStyle>;
};

export const LoginFormContent = ({
	children,
	style
}: LoginFormContentProps) => {
	const { styles } = useStyles(stylesheet);

	return (
		<Paper style={[styles.paper, style]}>
			<Typography variant='h2' style={styles.title}>
				Вход
			</Typography>

			<View style={styles.content}>{children}</View>
		</Paper>
	);
};

const stylesheet = createStyleSheet(theme => ({
	paper: {
		paddingTop: theme.spacing,
		borderBottomLeftRadius: 0,
		borderBottomRightRadius: 0
	},
	title: {
		textAlign: 'center',
		marginVertical: theme.spacing
	},
	content: {
		flex: 1
	}
}));
