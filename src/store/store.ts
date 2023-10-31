import wallet from './slices/walletSlice';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
	reducer: { wallet },
});
export type RootState = ReturnType<typeof store.getState>;
