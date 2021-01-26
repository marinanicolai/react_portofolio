import React, { useContext } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from '../../../providers/ThemeProvider';
import { Header } from '../../../components/theme';
import { Button } from '../../common/Button';
import { Container } from '../../common/Container';
import { Wrapper, IntroWrapper, Details } from './styles';

export const Intro = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper>
      <Header />
      <IntroWrapper as={Container}>
        <Details theme={theme}>
          <h1>Hello!</h1>
          <h4>I’m Marina Nicolai and I'm a JS developer!</h4>
          <Button as={AnchorLink} href="#contact">
            Hire me
          </Button>
        </Details>
      </IntroWrapper>
    </Wrapper>
  );
};
