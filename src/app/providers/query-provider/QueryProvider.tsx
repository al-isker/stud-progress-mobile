import { ReactNode, useEffect } from 'react';
import NetInfo from '@react-native-community/netinfo';
import { focusManager, onlineManager } from '@tanstack/react-query';
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client';
import { AppState } from 'react-native';
import { persistOptions, queryClient } from '@/shared/api';

type Props = {
	children: ReactNode;
};

export const QueryProvider = ({ children }: Props) => {
	useEffect(() => {
		const subscription = AppState.addEventListener('change', status => {
			focusManager.setFocused(status === 'active');
		});

		return subscription.remove;
	}, []);

	useEffect(() => {
		const unsubscribe = NetInfo.addEventListener(state => {
			onlineManager.setOnline(
				Boolean(state.isConnected && state.isInternetReachable)
			);
		});

		return unsubscribe;
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
