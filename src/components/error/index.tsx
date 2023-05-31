import { Img } from 'components/ui/Img';
import { Text } from 'components/ui/text';
import { View } from 'components/ui/view';
import Delete from 'assets/svg/delete-1.svg';

const Error = () => {
	return (
		<View pl='24px' pr='24px' pt='12px' pb='12px' bgc='#FFF5F2' br='12px'>
			<View mb='8px' dis='flex'>
				<Img src={Delete} alt='delete' />
				<Text color='#B01E20' fs='16px' ln='24px' fw='700' ml='9px'>
					Error
				</Text>
			</View>
			<Text color='#637282' fs='14px' ln='22px' fw='600'>
				There was a problem connecting the wallet to the NFTer, try again.
			</Text>
		</View>
	);
};

export default Error;
