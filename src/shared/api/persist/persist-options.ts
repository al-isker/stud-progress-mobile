import { PersistQueryClientProviderProps } from '@tanstack/react-query-persist-client';
import { PERSIST_MAX_AGE } from '../config/query-time-config';
import { persister } from './persister';
import { shouldDehydrateQuery } from './should-dehydrate-query';

type PersistOptions = PersistQueryClientProviderProps['persistOptions'];

export const persistOptions: PersistOptions = {
	persister,
	maxAge: PERSIST_MAX_AGE,
	dehydrateOptions: {
		shouldDehydrateQuery
	}
};
