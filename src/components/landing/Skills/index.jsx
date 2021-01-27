import React, { useContext } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from '../../../providers/ThemeProvider';
import { Container, Button } from '../../../components/common';
import { Wrapper, SkillsWrapper, Details } from './styles';

export const Skills = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper id="about">
      <SkillsWrapper as={Container}>
        <Details theme={theme}>
          <h1>My path:</h1>
          <ul>
            <li><span>2016</span> started teaching myself to code thru the different platforms available</li>
            <li><span>2017</span> started teaching myself the cybersecurity</li>
            <li><span>2018</span> passed the Security+ by CompTIA certification</li>
            <li><span>August 2019 - July 2020</span> worked as a junior web developer for 11 months</li>
            <li><span> July 2020</span> got laid off due to CORVID cuts</li>
            <li><span>Fall 2020</span> back to self teaching my self and also decided that this is what I want to do till the rest of my life, so I am earing online the B.S. in Computer Science</li>
          </ul>
          <Button as={AnchorLink} href="#contact">
            Hire me
          </Button>
        </Details>
      </SkillsWrapper>
    </Wrapper>
  );
};
