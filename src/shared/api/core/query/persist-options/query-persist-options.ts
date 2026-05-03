import { PersistQueryClientProviderProps } from '@tanstack/react-query-persist-client';
import { PERSIST_MAX_AGE } from '../config/query-time-config';
import { persister } from './persister';
import { shouldDehydrateQuery } from './should-dehydrate-query';

type QueryPersistOptions = PersistQueryClientProviderProps['persistOptions'];

export const queryPersistOptions: QueryPersistOptions = {
	persister,
	maxAge: PERSIST_MAX_AGE,
	dehydrateOptions: {
		shouldDehydrateQuery
	}
};
