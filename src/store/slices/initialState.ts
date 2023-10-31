import { WalletSliceState } from 'store/types';

export const initialState: WalletSliceState = {
	wallet: {
		connect: false,
		address: '',
	},
	loading: false,
	error: '',
};
