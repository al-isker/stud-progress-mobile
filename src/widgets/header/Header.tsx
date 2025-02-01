import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { useStyles } from 'react-native-unistyles';
import { stylesheet } from './header.stylesheet';

export const Header = () => {
	const { styles, theme } = useStyles(stylesheet);

	return (
		<>
			<StatusBar style='light' backgroundColor={theme.colors.primary} />

			<View style={styles.header}>
				<Text style={styles.title}>Stud Progress</Text>
			</View>
		</>
	);
};
