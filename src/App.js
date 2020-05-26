import React from 'react';
import GlobalStyle from './global';
import Routes from './configs/routes';
import TopBar from './pages/TopBar';
import { AppProvider  } from './configs/contexts/app';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div>
        <AppProvider>
          <BrowserRouter>
              <TopBar/>
              <Routes/>
          </BrowserRouter>
        </AppProvider>
      <GlobalStyle/>  
    </div>
  );
}

export default App;
