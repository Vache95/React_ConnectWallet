import { initialState } from './initialState';
import { connectThunk } from './thunk';
import { createSlice, isAllOf, PayloadAction } from '@reduxjs/toolkit';

export const walletslice = createSlice({
	name: 'wallet',
	initialState,
	reducers: {
		connectWallet: (state, { payload }: PayloadAction<string>) => {
			localStorage.setItem('token', payload);
			state.wallet.connect = true;
			state.wallet.address = payload;
		},
	},
	extraReducers: builder => {
		builder
			.addMatcher(isAllOf(connectThunk.pending), state => {
				state.loading = true;
			})
			.addMatcher(isAllOf(connectThunk.fulfilled), state => {
				state.loading = false;
			})
			.addMatcher(isAllOf(connectThunk.rejected), (state, { payload }: PayloadAction<any>) => {
				state.loading = false;
				state.error = payload?.message;
			});
	},
});

export const { connectWallet } = walletslice.actions;

export default walletslice.reducer;
