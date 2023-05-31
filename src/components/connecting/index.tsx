import ProgressComponent from 'components/progress';

import { ConnectM, ConnectMText } from './connect';

const Connectiong: React.FC = (): JSX.Element => (
	<ConnectM>
		<ProgressComponent />
		<ConnectMText>Connecting ...</ConnectMText>
	</ConnectM>
);

export default Connectiong;
