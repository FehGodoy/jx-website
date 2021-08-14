  import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/globalStyles';
import { theme } from './styles/theme';
import Home from './pages/Home';
import {Sobre} from './pages/Sobre';
import {Servicos} from './pages/Servicos';
import {Contato} from './pages/Contato';
import {Header} from './components/Header';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import {Footer} from './components/Footer';



ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <BrowserRouter>
        <Header />
        <Switch> 
        <Route path="/" component={Home} exact />
        <Route path="/sobre" component={Sobre} exact />
        <Route path="/servicos" component={Servicos} exact />
        <Route path="/contato" component={Contato} exact />
        </Switch>
      </BrowserRouter>      
      <Footer />
      <GlobalStyles />
    </ThemeProvider>    
  </React.StrictMode>,
  document.getElementById('root')
);

