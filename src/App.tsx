import Header from 'components/header';
import { Mask } from 'components/mask';
import { Container } from 'components/ui/container';

import { Main, Wrapper } from 'style/style';

function App(): JSX.Element {
	return (
		<Wrapper>
			<Header />
			<Main>
				<Container>
					<Mask />
				</Container>
			</Main>
		</Wrapper>
	);
}

export default App;
