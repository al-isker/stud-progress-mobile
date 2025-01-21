import { configureStore } from '@reduxjs/toolkit';
import { api } from '@/shared/api/config/api';

export const store = configureStore({
	reducer: {
		[api.reducerPath]: api.reducer
	}
});
