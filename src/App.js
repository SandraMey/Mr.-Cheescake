import {React, useState} from 'react';
import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Display from './components/Scan/Display';
import axios from 'axios';
import DisplayCode from './components/api/DisplayCode';
import DisplayScan from './components/Scan/DisplayScan';
import Alternatives from "./components/alternatives/Alternatives";
import Home from './components/Home';


function App() {

  const getOpenFoodFact = () => {
    // Send the request 
    const codebarre = '04963406'
    axios
    .get(`https://fr.openfoodfacts.org/api/v2/product/${codebarre}`)
    .then((response) => response.data)
    .then((data) => {
    setProduct(data.product)
    })
    }

const [product, setProduct] = useState('')
  return (
    <div className="App">
    
      <Header />
      <Display />
      <Home />
      <Footer />
      <DisplayCode product={product} />
      <input type="codebarre" onChange={getOpenFoodFact}></input>
      <DisplayScan product={product} 
      setProduct={setProduct}/>
      <Alternatives/>

    </div>
  );
}


export default App;
