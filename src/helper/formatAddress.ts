export const formatAddress = (address: string): string | null => {
	return address ? `${address.slice(0, 5)}...${address.slice(6, 11)}` : null;
};
