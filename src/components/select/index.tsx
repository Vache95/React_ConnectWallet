import { useState } from 'react';
import { Img } from 'components/ui/Img';
import { Text } from 'components/ui/text';
import { View } from 'components/ui/view';
import { selectWallet } from 'store/selector';
import Explore from 'assets/svg/Frame 1497.svg';
import DisCount from 'assets/svg/Frame 1594.svg';
import Arrow from 'assets/svg/Shape (1).svg';

import { keccak256 } from 'ethers';
import { useAppSelector } from 'hook/useSelector';
import { theme } from 'theme';

const Select = () => {
	const [toggle, setToggle] = useState(false);
	const { wallet } = useAppSelector(selectWallet);
	const openOption = () => setToggle(!toggle);

	const generateAvatar = () => {
		const sha3Hash = keccak256(wallet?.address);
		return `https://www.gravatar.com/avatar/${sha3Hash}?d=identicon`;
	};
	const formatAddress = () => {
		return wallet?.address
			? `${wallet?.address.slice(0, 5)}...${wallet?.address.slice(6, 11)}`
			: null;
	};
	const disconnects = () => {
		localStorage.removeItem('token');
		window.location.reload();
	};

	return (
		<View
			w='178px'
			h='40px'
			br='8px'
			dis='flex'
			dis_a='center'
			pt='10px'
			pb='10px'
			pl='12px'
			pr='12px'
			brc={theme.colors.palette[300]}
			s640
			pos='relative'
		>
			<View dis='flex' dis_a='center'>
				<Img src={generateAvatar()} alt='avatar' w='20px' h='20px' br='12.5px' />
				<Text color='#637282' fs='14px' ln='22px' fw='600' ml='8px'>
					{formatAddress()}
				</Text>
			</View>
			<View
				style={{ borderLeft: '1px solid #DBDEE5' }}
				ml='12px'
				pl='14px'
				dis='flex'
				dis_a='center'
				h='12px'
			>
				<Img src={Arrow} alt='arrow' style={{ cursor: 'pointer' }} onClick={openOption} />
			</View>
			{toggle && (
				<View
					pos='absolute'
					w='230px'
					h='124px'
					tt='48px'
					r='0px'
					br='12px'
					bs='0px 15px 35px rgba(33, 34, 37, 0.08)'
					bgc='#fff'
					pt='16px'
				>
					<View w='100%' h='48px' hs dis='flex' dis_a='center' pl='24px'>
						<Img src={Explore} alt='explore' style={{ cursor: 'pointer' }} />
						<Text fs='16px' ln='24px' fw='600' color='#637282' ml='15px'>
							View on Explorer
						</Text>
					</View>
					<View w='100%' h='48px' hs dis='flex' dis_a='center' pl='24px'>
						<Img src={DisCount} alt='disCount' style={{ cursor: 'pointer' }} />
						<Text fs='16px' ln='24px' fw='600' color='#637282' ml='15px' onClick={disconnects}>
							Disconnect Wallet
						</Text>
					</View>
				</View>
			)}
		</View>
	);
};

export default Select;
