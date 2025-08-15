import { ReactNode, useEffect } from 'react';
import NetInfo from '@react-native-community/netinfo';
import {
	QueryClientProvider,
	focusManager,
	onlineManager
} from '@tanstack/react-query';
import { AppState } from 'react-native';
import { queryClient } from './query-client';

export const QueryProvider = ({ children }: { children: ReactNode }) => {
	useEffect(() => {
		const subscription = AppState.addEventListener('change', status => {
			focusManager.setFocused(status === 'active');
		});

		return subscription.remove;
	}, []);

	useEffect(() => {
		const unsubscribe = NetInfo.addEventListener(state => {
			onlineManager.setOnline(
				!!state.isConnected && !!state.isInternetReachable
			);
		});

		return unsubscribe;
	}, []);

	return (
		<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
	);
};
