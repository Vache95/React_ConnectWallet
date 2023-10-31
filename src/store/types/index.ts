export interface WalletSliceState {
	wallet: {
		connect: boolean;
		address: string;
	};
	loading: boolean;
	error: any;
}
