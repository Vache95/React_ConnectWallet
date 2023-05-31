import ProgressComponent from 'components/progress';
import { Text } from 'components/ui/text';
import { View } from 'components/ui/view';

const Connectiong = () => {
	return (
		<>
			<View dis='flex' dis_a='center' dis_j=''>
				<ProgressComponent />
				<Text color='#212225' fs='16px' ln='24px' fw='700' ml='13px'>
					Connecting ...
				</Text>
			</View>
		</>
	);
};

export default Connectiong;
