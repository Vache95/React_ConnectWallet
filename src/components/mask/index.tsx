import { Contenet, MaskLogo, MaskLogoBg } from 'components/ui/metaMask';
import { Text } from 'components/ui/text';
import MaskLogos from 'assets/svg/Frame 1586.svg';

export const Mask = () => {
    return (
        <>
            <Contenet>
                <MaskLogoBg>
                    <MaskLogo src={MaskLogos} alt='maskLog' />
                </MaskLogoBg>
                <Text color='#212225' fs='24px' ln='32px' fw='700px'>
                    Welcome
                </Text>
                <Text color='#637282' fs='14px' ln='22px' fw='600px'>
                    Connect your wallet via MetaMask to continue
                </Text>
            </Contenet>
        </>
    );
};
