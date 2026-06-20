import { ReactNode, useEffect } from 'react';
import { addNetworkStateListener } from 'expo-network';
import { focusManager, onlineManager } from '@tanstack/react-query';
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client';
import { AppState } from 'react-native';
import { queryClient, queryPersistOptions } from '@/shared/api';
import { callAll } from '@/shared/lib/toolkit';

type QueryProviderProps = {
	children: ReactNode;
};

export const QueryProvider = ({ children }: QueryProviderProps) => {
	useEffect(() => {
		const subscriptionOne = AppState.addEventListener('change', status => {
			focusManager.setFocused(status === 'active');
		});

		const subscriptionTwo = addNetworkStateListener(state => {
			onlineManager.setOnline(
				state.isConnected !== false && state.isInternetReachable !== false
			);
		});

		return callAll(subscriptionOne.remove, subscriptionTwo.remove);
	}, []);

	return (
		<PersistQueryClientProvider
			client={queryClient}
			persistOptions={queryPersistOptions}
		>
			{children}
		</PersistQueryClientProvider>
	);
};
