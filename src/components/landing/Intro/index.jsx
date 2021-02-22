import React, { useContext } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from '../../../providers/ThemeProvider';
import { Header } from '../../../components/theme';
import { Button } from '../../common/Button';
import { SocialMedia } from '../SocialMedia';
import { Container } from '../../common/Container';
import { Wrapper, IntroWrapper, Details } from './styles';
import emoji from "react-easy-emoji";
import "./styles.css";

export const Intro = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper>
      <Header />
      <IntroWrapper as={Container}>
        <Details theme={theme}>
          <h1>Hi all, I'm Marina <span className="wave-emoji">{emoji("👋")}</span> </h1>
          <p className="greeting-text-p">A passionate Front-End Developer 🚀 having an experience of building Web
            and Mobile applications with JavaScript / React.js and some other libraries and frameworks.</p>
          <Button as={AnchorLink} href="#contact">
            Hire me
          </Button>
          <SocialMedia />
        </Details>
      </IntroWrapper>
    </Wrapper>
  );
};
