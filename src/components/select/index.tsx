import { useState } from 'react';
import { Img } from 'components/ui/Img';
import { selectWallet } from 'store/selector';
import Explore from 'assets/svg/Frame 1497.svg';
import DisCount from 'assets/svg/Frame 1594.svg';
import Arrow from 'assets/svg/Shape (1).svg';

import {
	Avatar,
	AvatarAddress,
	ItemText,
	OptionItem,
	SelectArrow,
	SelectBox,
	Selects,
	SelectsOption,
} from './select';
import { formatAddress } from 'helper/formatAddress';
import { generateAvatar } from 'helper/generatorAvatar';
import { useAppSelector } from 'hook/useSelector';

const Select: React.FC = (): JSX.Element => {
	const [toggle, setToggle] = useState<boolean>(false);
	const { wallet } = useAppSelector(selectWallet);

	const openOption = (): void => setToggle(!toggle);
	const disconnects = (): void => {
		localStorage.removeItem('token');
		window.location.reload();
	};

	return (
		<Selects>
			<SelectBox>
				<Avatar src={generateAvatar(wallet?.address)} />
				<AvatarAddress>{formatAddress(wallet?.address)}</AvatarAddress>
			</SelectBox>
			<SelectArrow>
				<Img src={Arrow} cursors onClick={openOption} />
			</SelectArrow>
			{toggle && (
				<SelectsOption>
					<OptionItem>
						<Img src={Explore} cursors />
						<ItemText>View on Explorer</ItemText>
					</OptionItem>
					<OptionItem>
						<Img src={DisCount} cursors />
						<ItemText onClick={disconnects}>Disconnect Wallet</ItemText>
					</OptionItem>
				</SelectsOption>
			)}
		</Selects>
	);
};

export default Select;
