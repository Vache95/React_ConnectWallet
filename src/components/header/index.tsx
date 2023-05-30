import { useEffect } from 'react';
import Select from 'components/select';
import { Buttons } from 'components/ui/button';
import { selectWallet } from 'store/selector';
import { connectThunk } from 'store/slices/thunk';
// import { connectWallet } from 'store/slices/walletSlice';
import Logos from 'assets/svg/Logo.svg';

import { Headers, Logo } from './header';
import { useAppDispatch } from 'hook/useDispatch';
import { useAppSelector } from 'hook/useSelector';

const Header = () => {
	const { wallet } = useAppSelector(selectWallet);
	const dispatch = useAppDispatch();

	const connectWallety = () => () => {
		if (localStorage.getItem('token')) {
			connectWalletRequest();
		}
	};

	useEffect(connectWallety(), []);

	const connectWalletRequest = () => {
		if (window.ethereum) {
			dispatch(connectThunk());
		} else {
			alert('Install MetaMask extension!');
		}
	};

	return (
		<Headers>
			<Logo src={Logos} alt='logo' />
			{!wallet?.connect && <Buttons onClick={connectWalletRequest}>Connect</Buttons>}
			{wallet?.connect && localStorage.getItem('token') && <Select />}
		</Headers>
	);
};

export default Header;
