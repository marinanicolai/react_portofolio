import { useContext } from 'react';
import { ThemeContext } from '../../../providers/ThemeProvider';
import { Container, Card, TitleWrap } from '../../common';
import { Wrapper, Grid, Content, Item } from './styles';


export const Project = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <Wrapper as={Container} id="projects">
      <h2>Projects</h2>
      <Grid>
        <Item theme={theme}>
          <Card theme={theme}>
            <Content>
              <h4>title</h4>
              <p>description</p>
            </Content>
          </Card>
        </Item>
        <Item theme={theme}>
          <Card theme={theme}>
            <Content>
              <h4>title</h4>
              <p>description</p>
            </Content>
          </Card>
        </Item>
        <Item theme={theme}>
          <Card theme={theme}>
            <Content>
              <h4>title</h4>
              <p>description</p>
            </Content>
          </Card>
        </Item>
        <Item theme={theme}>
          <Card theme={theme} >
            <Content>
              <h4>title</h4>
              <p>description</p>
            </Content>
          </Card >
        </Item>
        <Item theme={theme}>
          <Card theme={theme} >
            <Content>
              <h4>title</h4>
              <p>description</p>
            </Content>
          </Card >
        </Item>
        <Item theme={theme}>
          <Card theme={theme} >
            <Content>
              <h4>title</h4>
              <p>description</p>
            </Content>
          </Card >
        </Item>
      </Grid >
    </Wrapper >
  );
};

