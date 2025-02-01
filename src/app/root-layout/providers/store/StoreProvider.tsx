import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { store } from '@/shared/lib/store';

export const StoreProvider = ({ children }: { children: ReactNode }) => (
	<Provider store={store}>{children}</Provider>
);
