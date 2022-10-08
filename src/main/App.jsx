import './App.css';
import React from 'react';

import {BrowserRouter} from 'react-router-dom';

import Header from "../components/templates/Header"
import Footer from '../components/templates/Footer';
import Routes from './Routes'

function App() {
  return (
      <BrowserRouter>
        <Header/>
        <Routes/>
        <Footer/>
    </BrowserRouter> 

  );
}

export default App;
