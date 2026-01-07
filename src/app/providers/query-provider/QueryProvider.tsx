import { ReactNode, useEffect } from 'react';
import { addNetworkStateListener } from 'expo-network';
import { focusManager, onlineManager } from '@tanstack/react-query';
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client';
import { AppState } from 'react-native';
import { persistOptions, queryClient } from '@/shared/api';

type QueryProviderProps = {
	children: ReactNode;
};

export const QueryProvider = ({ children }: QueryProviderProps) => {
	useEffect(() => {
		const subscription = AppState.addEventListener('change', status => {
			focusManager.setFocused(status === 'active');
		});

		return subscription.remove;
	}, []);

	useEffect(() => {
		const subscription = addNetworkStateListener(state => {
			onlineManager.setOnline(
				Boolean(state.isConnected && state.isInternetReachable)
			);
		});

		return subscription.remove;
	}, []);

	return (
		<PersistQueryClientProvider
			client={queryClient}
			persistOptions={persistOptions}
		>
			{children}
		</PersistQueryClientProvider>
	);
};
