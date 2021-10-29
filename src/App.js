import React from 'react';

import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Display from './components/Scan/Display';




function App() {
  return (
    <div className="App">
      <Header />
      <Display />
      <Footer />
    </div>
  );
}


export default App;
