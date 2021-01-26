import React, { useContext } from 'react';
import { Link } from 'react';
import { ThemeContext } from '../../../../providers/ThemeProvider';
import { Container } from '../../../../components/common';
import NavbarLinks from '../NavbarLinks';
import { Wrapper, Brand } from './styles';

const Navbar = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <Wrapper as={Container}>
            <Brand as={Link} to="/" theme={theme}>
                Marina Nicolai
      </Brand>
            <NavbarLinks desktop />
        </Wrapper>
    );
};

export default Navbar;
