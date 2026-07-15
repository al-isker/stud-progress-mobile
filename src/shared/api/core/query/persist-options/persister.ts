import AsyncStorage from '@react-native-async-storage/async-storage';
import { createAsyncStoragePersister } from '@tanstack/query-async-storage-persister';
import { STORAGE_KEYS } from '@/shared/config/storage';

export const persister = createAsyncStoragePersister({
	storage: AsyncStorage,
	key: STORAGE_KEYS.tanstackQueryPersistClient
});
