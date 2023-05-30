import Connectiong from 'components/connecting';
import Error from 'components/error';
import { Contenet, MaskLogo, MaskLogoBg } from 'components/ui/metaMask';
import { Text } from 'components/ui/text';
import { selectWallet } from 'store/selector';
import MaskLogos from 'assets/svg/Frame 1586.svg';

import { useAppSelector } from 'hook/useSelector';

export const Mask = () => {
	const { loading, error } = useAppSelector(selectWallet);
	console.log(error, 'error');

	return (
		<>
			<Contenet>
				<MaskLogoBg>
					<MaskLogo src={MaskLogos} alt='maskLog' />
				</MaskLogoBg>
				<Text color='#212225' fs='24px' ln='32px' fw='700px'>
					Welcome
				</Text>
				<Text color='#637282' fs='14px' ln='22px' fw='600px' mb='16px'>
					Connect your wallet via MetaMask to continue
				</Text>
				{loading && <Connectiong />}
				{error && <Error />}
			</Contenet>
		</>
	);
};
