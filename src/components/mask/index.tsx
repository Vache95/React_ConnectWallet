import Connectiong from 'components/connecting';
import Error from 'components/error';
import { selectWallet } from 'store/selector';
import MaskLogos from 'assets/svg/Frame 1586.svg';

import { Contenet, MaskLogo, MaskLogoBg, MaskText, MaskWelcomText } from './mask';
import { useAppSelector } from 'hook/useSelector';

export const Mask: React.FC = (): JSX.Element => {
	const { loading, error } = useAppSelector(selectWallet);

	return (
		<>
			<Contenet>
				<MaskLogoBg>
					<MaskLogo src={MaskLogos} />
				</MaskLogoBg>
				<MaskWelcomText>Welcome</MaskWelcomText>
				<MaskText>Connect your wallet via MetaMask to continue</MaskText>
				{loading && <Connectiong />}
				{error && <Error />}
			</Contenet>
		</>
	);
};
