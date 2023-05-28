import { Buttons } from 'components/ui/button';
import Logos from 'assets/svg/Logo.svg';

import { Headers, Logo } from './header';

const Header = () => {
    return (
        <Headers>
            <Logo src={Logos} alt='logo' />
            <Buttons>Connect</Buttons>
        </Headers>
    );
};

export default Header;
