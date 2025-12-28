import AsyncStorage from '@react-native-async-storage/async-storage';
import { createAsyncStoragePersister } from '@tanstack/query-async-storage-persister';
import { TANSTACK_QUERY_PERSIST_CLIENT_STORAGE_KEY } from '@/shared/config/storage';

export const persister = createAsyncStoragePersister({
	storage: AsyncStorage,
	key: TANSTACK_QUERY_PERSIST_CLIENT_STORAGE_KEY
});
