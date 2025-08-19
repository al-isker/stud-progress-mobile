import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { Typography } from '@/shared/ui/typography';

export const Header = () => {
	const { styles, theme } = useStyles(stylesheet);

	return (
		<>
			<StatusBar style='light' backgroundColor={theme.colors.primary} />

			<View style={styles.header}>
				<Typography colorOnPrimary>Stud Progress</Typography>
			</View>
		</>
	);
};

const stylesheet = createStyleSheet(theme => ({
	header: {
		zIndex: theme.zIndex.header,
		elevation: 8,
		backgroundColor: theme.colors.primary,
		padding: theme.spacing
	}
}));
