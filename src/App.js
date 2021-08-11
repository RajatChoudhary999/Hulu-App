import React from 'react'
import { useState } from 'react';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Nav from './Components/Nav';
import Results from './Components/Results';
import requests from './requests';

function App() {

  const [selectedOption, setSelectedOption] = useState(requests.fetchTrending);
  return (
    <div className = "App">
      <Header />
      <Nav setSelectedOption={setSelectedOption }/>
      <Results selectedOption={selectedOption} />
      <Footer/>
    </div>
  )
}

export default App;

