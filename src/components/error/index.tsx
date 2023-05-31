import { Img } from 'components/ui/Img';
import Delete from 'assets/svg/delete-1.svg';

import { ErrorBox, Errors, ErrorText, EText } from './error';

const Error: React.FC = () => {
	return (
		<Errors>
			<ErrorBox>
				<Img src={Delete} />
				<EText>Error</EText>
			</ErrorBox>
			<ErrorText>There was a problem connecting the wallet to the NFTer, try again.</ErrorText>
		</Errors>
	);
};

export default Error;
