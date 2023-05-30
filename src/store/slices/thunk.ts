import { connectWallet } from './walletSlice';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const connectThunk = createAsyncThunk(
	'authThunk',
	async (_, { dispatch, rejectWithValue }) => {
		try {
			const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
			dispatch(connectWallet(accounts[0]));
		} catch (error) {
			return rejectWithValue(error);
		}
	}
);
