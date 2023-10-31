import { useEffect } from 'react';
import Select from 'components/select';
import { Buttons } from 'components/ui/button';
import { selectWallet } from 'store/selector';
import { connectThunk } from 'store/slices/thunk';
// import { connectWallet } from 'store/slices/walletSlice';
import Logos from 'assets/svg/Logo.svg';

import { Headers, Logo } from './header';
// import { ethers } from 'ethers';
import { useAppDispatch } from 'hook/useDispatch';
import { useAppSelector } from 'hook/useSelector';

const Header: React.FC = (): JSX.Element => {
	const { wallet } = useAppSelector(selectWallet);
	const dispatch = useAppDispatch();

	const connectWallety = () => () => {
		if (localStorage.getItem('token')) {
			connectWalletRequest();
		}
	};

	// eslint-disable-next-line react-hooks/exhaustive-deps
	useEffect(connectWallety(), []);

	const connectWalletRequest = async () => {
		// const provider = new ethers.providers.Web3Provider(window.ethereum);
		const provider = false;
		if (!provider) {
			dispatch(connectThunk());
		} else if (provider) {
			// await provider.send('eth_requestAccounts', []);
			// const signer = provider.getSigner();
			// const address = await signer.getAddress();
			// dispatch(connectWallet(address));
		} else {
			alert('Install MetaMask extension!');
		}
	};

	return (
		<Headers>
			<Logo src={Logos} />
			{!wallet?.connect && <Buttons onClick={connectWalletRequest}>Connect</Buttons>}
			{wallet?.connect && localStorage.getItem('token') && <Select />}
		</Headers>
	);
};

export default Header;
