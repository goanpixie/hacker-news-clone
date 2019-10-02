import React from 'react';
import { ThemeProvider } from 'styled-components';
import logo from './logo.svg';
import { colorsDark } from 'styles/palette';
import List from 'components/List';
import { Title, Wrapper } from './styles';

function App() {
  return (
    <ThemeProvider theme={colorsDark}>
      <div>
        <Wrapper>
          <Title>Hacker News for you!</Title>
          <List/>
        </Wrapper>
      </div>
    </ThemeProvider>
  );
}

export default App;