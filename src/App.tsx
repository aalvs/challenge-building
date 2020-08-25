import React, { Fragment, useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import HomeBuilding from './components/HomeBuilding';
import GlobalStyle from './styles/global'
import light from './styles/themes/light';
import dark from './styles/themes/dark';
import Sunset from './components/Sunset';
import api from './services/api'

function App() {

  
  const [location, setLocation] = useState(false);
  const [weather, setWeather] = useState(false);
  const [theme, setDarkTheme] = useState(light);

  let getWeather = async (lat, long) => {
    let response = await api.get('results', {
      params: {
        
      }
      
    });
    setWeather(response.data);

  }

  /* Função para pegar location do browser */
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position)=>{
      getWeather(position.coords.latitude, position.coords.longitude);
      setLocation(true)
    })
  }, [])

  /* Função para ativar darktheme ao clicar no sun */
  const toggleTheme = () => {
    setDarkTheme(theme.title === 'light' ? dark : light);
  }

  return (
    <Fragment>
      <ThemeProvider theme={theme}>
        <div className="App">
          <GlobalStyle />
          <Sunset toggleTheme={ toggleTheme } />
          <HomeBuilding />
        </div>
      </ThemeProvider>
    </Fragment>
  );
}

export default App;
