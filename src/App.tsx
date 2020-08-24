import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import HomeBuilding from './components/HomeBuilding';
import GlobalStyle from './styles/global'
import light from './styles/themes/light';
import dark from './styles/themes/dark';
import Sunset from './components/Sunset';

function App() {

  const [theme, setDarkTheme] = useState(light);

  const toggleTheme = () => {
    setDarkTheme(theme.title === 'light' ? dark : light);
  }

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyle />
        <Sunset toggleTheme={ toggleTheme } />
        <HomeBuilding />
      </div>
    </ThemeProvider>
  );
}

export default App;
