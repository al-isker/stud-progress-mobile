import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { APP_TITLE } from '@/shared/config/app-data';
import { Typography } from '@/shared/ui/typography';

export const Header = () => {
	const { styles, theme } = useStyles(stylesheet);

	return (
		<>
			<StatusBar style='light' backgroundColor={theme.colors.primary} />

			<View style={styles.header}>
				<Typography colorOnPrimary>{APP_TITLE}</Typography>
			</View>
		</>
	);
};

const stylesheet = createStyleSheet(theme => ({
	header: {
		zIndex: theme.zIndex.header,
		elevation: 8,
		backgroundColor: theme.colors.primary,
		paddingTop: 8,
		paddingInline: 16,
		paddingBottom: 16
	}
}));
