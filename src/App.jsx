import { BrowserRouter } from 'react-router';

import { Router } from './Router';

import './App.css';


const App = () => {
  return (
    <>
      <BrowserRouter> 
        <Router />
      </BrowserRouter>
    </>
  )
};

export {App};
