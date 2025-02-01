import React from 'react';
import { Stack } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Routes } from '@/shared/config/navigation';

export const Navigation = () => {
	return (
		<SafeAreaView style={{ height: '100%' }}>
			<Stack screenOptions={{ headerShown: false }}>
				<Stack.Screen name={Routes.HOME} />
				<Stack.Screen name={Routes.SIGN_IN} />
			</Stack>
		</SafeAreaView>
	);
};
