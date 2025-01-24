import React from 'react';
import { Stack } from 'expo-router';
import { Routes } from '@/shared/config/navigation';

export const AuthLayout = () => {
	return (
		<Stack
			screenOptions={{
				animation: 'slide_from_bottom',
				headerShown: false
			}}
		>
			<Stack.Screen name={Routes.SIGN_IN} />
		</Stack>
	);
};
