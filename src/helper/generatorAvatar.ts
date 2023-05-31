import { ethers } from 'ethers';

export const generateAvatar = (address: string): string => {
	const sha3Hash = ethers.utils.keccak256(address);
	return `https://www.gravatar.com/avatar/${sha3Hash}?d=identicon`;
};
