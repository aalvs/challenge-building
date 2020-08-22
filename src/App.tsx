import React from 'react';
import { ThemeProvider } from 'styled-components';
import HomeBuilding from './components/HomeBuilding';
import GlobalStyle from './styles/global'
import light from './styles/themes/light';

function App() {
  return (
    <ThemeProvider theme={light}>
      <div className="App">
        <GlobalStyle />
        <HomeBuilding />
      </div>
    </ThemeProvider>
  );
}

export default App;
