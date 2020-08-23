import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import HomeBuilding from './components/HomeBuilding';
import GlobalStyle from './styles/global'
import light from './styles/themes/light';
import dark from './styles/themes/dark';
import Sunset from './components/Sunset';

function App() {

  const [darktheme, setDarkTheme] = useState(false);
  
  return (
    <ThemeProvider theme={darktheme ? dark : light }>
      <div className="App">
        <GlobalStyle />
        <Sunset />
        <HomeBuilding />
      </div>
    </ThemeProvider>
  );
}

export default App;
