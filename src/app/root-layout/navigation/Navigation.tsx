import React from 'react';
import { Stack } from 'expo-router';
import { SafeAreaView } from 'react-native';
import { Routes } from '@/shared/config/navigation';

export const Navigation = () => {
	return (
		<SafeAreaView className='h-full'>
			<Stack screenOptions={{ headerShown: false }}>
				<Stack.Screen name={Routes.HOME} />
				<Stack.Screen name={Routes.SIGN_IN} />
			</Stack>
		</SafeAreaView>
	);
};
