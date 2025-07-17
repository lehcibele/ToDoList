import { BrowserRouter } from 'react-router';

import { AppContextProvider } from './contexts/AppContext';
import { Router } from './Router';

import './App.css';


const App = () => {
  return (
    <>
      <AppContextProvider>
        <BrowserRouter> 
          <Router />
        </BrowserRouter>
      </AppContextProvider>
    </>
  )
};

export {App};
