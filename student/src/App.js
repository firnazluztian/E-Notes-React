import React from 'react';
import './css/App.css';
import faker from 'faker';
import Header from './js-components/Header'
import Footer from './js-components/Footer'
import Navbar from './js-components/Navbar'
import MainCOntent from './js-components/MainContent'

function App() {
  return (
    <div>
      <Navbar navbarTitle="E-StudentNotes" />
      <Header />
      <MainCOntent />
      <Footer />
    </div>
  );
}

export default App;
